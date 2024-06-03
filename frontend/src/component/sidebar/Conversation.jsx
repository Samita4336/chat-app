import React from 'react'
import useConversation from '../../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ conversation, emoji, lastIdx }) => {
  const { selectedConversation, setSelectedConversation } = useConversation()
  const isSeleceted = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
	const isOnline = onlineUsers.includes(conversation._id);


  return (
    <>
      <div className={` flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer
        ${isSeleceted ? "bg-sky-500" : ""}
      `}
      onClick={() => setSelectedConversation(conversation)}
      >
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className='md:w-12 w-8 rounded-full '>
          <img src={conversation.profilePic} />
        </div>
      </div>
      <div className='flex flex-col flex-1'>
        <div className='flex gap-3 justify-between'>
            <p className='font-bold text-gray-200 text-sm md:text-md'>{ conversation.fullName}</p>
          <span className='text-xl hidden md:inline-block'>{emoji}</span>
        </div>
      </div>
    </div>
     {!lastIdx &&  <div className='divider my-0 py-0 h-1' />}
      </>
  )
}

export default Conversation;


// STARTER CODE HERE
// import React from 'react'

// const Conversation = () => {
//   return (
//     <>
//     <div className=' flex gap-2 items-center hover:bg-sky-500 rounded p-2py-1 cursor-pointer'>
//       <div className='avatar online'>
//         <div className='w-12 rounded-full'>
//           <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
//         </div>
//       </div>
//       <div className='flex flex-col flex-1'>
//         <div className='flex gap-3 justify-between'>
//           <p className='font-bold text-gray-200'>Jone Doe</p>
//           <span className='text-xl'>😎</span>
//         </div>
//       </div>
//     </div>
//       <div className='divider my-0 py-0 h-1' />
//       </>
//   )
// }

// export default Conversation