import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    console.log("req.user", req)
    try {
        const {message} = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;


       let conservation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
       });
        
        if (!conservation) {
            conservation = await Conversation.create({
                participants: [senderId, receiverId],
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        })

        if (newMessage) {
            conservation.messages.push(newMessage._id);
        }

        // SOCKET IO FUNCTIONALITY WILL GO HERE

        // await conservation.save();
        // await newMessage.save();
       
        await Promise.all([conservation.save(), newMessage.save()] );

        res.status(201).json(newMessage);

        
    } catch (error) {
        console.log("Error in sending message: ", error.message);
        res.status(500).json({error: "Internal Server Error"});
        
    }
};

export const getMessages = async (req, res) => {
    try {
        
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages"); // NOT REFERENCE BUT ACCTUAL MESSAGES

        if (!conversation) return res.status(200).json([]);
       

        const messages = conversation.messages;
        
        
        res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessages: ", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}