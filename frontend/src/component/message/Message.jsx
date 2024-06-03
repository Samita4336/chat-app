import React from 'react'
import { useAuthContext } from '../../context/AuthContext';
import useConversation from '../../zustand/useConversation';
import { extractTime } from '../../utils/extractTime';

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formatedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePic;
  const bubbleChatColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";



  return (
      <div className={`chat ${chatClassName}`}>
          <div className='avatar hidden md:block chat-image'>
              <div className='md:w-10 w-6 rounded-full'>
                   <img alt="Tailwind CSS chat bubble component" src={profilePic} />
                  
              </div>
              
          </div>
          
          {/* <div> */}
      <div className={`chat-bubble text-white ${bubbleChatColor} ${shakeClass} text-sm md:text-md`}>{message.message}</div>
      <div className='chat-footer text-white opacity-50 text-xs flex gap-1 items-center'>{formatedTime }</div>
          {/* </div> */}
    </div>
  )
}

export default Message;


// STARTER CODE SNIPPETS
// import React from 'react'

// const Message = () => {
//   return (
//       <div className='chat chat-end'>
//           <div className='avatar chat-image'>
//               <div className='w-10 rounded-full'>
//                    <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  
//               </div>
              
//           </div>
          
//           {/* <div> */}
//               <div className={`chat-bubble text-white bg-blue-500`}>Hi!, what's up?</div>
//               <div className='chat-footer text-white opacity-50 text-xs flex gap-1 items-center'>1:42</div>
//           {/* </div> */}
//     </div>
//   )
// }

// export default Message