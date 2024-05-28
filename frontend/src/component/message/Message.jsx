import React from 'react'

const Message = () => {
  return (
      <div className='chat chat-end'>
          <div className='avatar chat-image'>
              <div className='w-10 rounded-full'>
                   <img alt="Tailwind CSS chat bubble component" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                  
              </div>
              
          </div>
          
          {/* <div> */}
              <div className={`chat-bubble text-white bg-blue-500`}>Hi!, what's up?</div>
              <div className='chat-footer text-white opacity-50 text-xs flex gap-1 items-center'>1:42</div>
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