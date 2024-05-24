import mongoose from "mongoose";

const conservationSchema = new mongoose.Schema({
    participants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }
    ],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Message",
            default: []
        }
    ]
}, { timestamps: true });

const Conservation = mongoose.model("Conservation", conservationSchema);

export default Conservation;