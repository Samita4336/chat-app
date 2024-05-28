import React from 'react'
import GenderCheckbox from './GenderCheckbox'

function SignUp() {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding  backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'> signup
       <span className='text-blue-500'>ChatApp</span>
        </h1> 

        <form>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-slate-300'>Full Name</span>
            </label>
              <input type="text" placeholder='Eshete Essayas' className='w-full input input-bordered h-10' />
          </div>
          
          <div>
            <label className='label p-2'>
                <span className='text-base label-text text-slate-300'>Username</span>
             </label>
               <input type="text" placeholder='esheteesayas' className='w-full input input-bordered h-10' />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-slate-300'>Password</span>
            </label>
            <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
          </div>
 <div>
            <label className='label p-2'>
              <span className='text-base label-text text-slate-300'>Confirm Password</span>
            </label>
            <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
          </div>
       {/* GENDER CHECKBOX HERE */}
          <GenderCheckbox />

          <a href="#" className='text-sm text-slate-400 hover:text-blue-600 mt-4 inline-block'>
            Already have an account?
          </a>
          <button type="submit" className='btn btn-block btn-sm mt-2 border border-slate-700'>
            Sign Up
          </button>

        </form>
      </div>
      </div>
  )
}

export default SignUp;



//STARTER CODE FOR SIGNUP COMPONET

// import React from 'react'
// import GenderCheckbox from './GenderCheckbox'

// function SignUp() {
//   return (
//     <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//       <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding  backdrop-filter backdrop-blur-lg bg-opacity-0'>
//         <h1 className='text-3xl font-semibold text-center text-gray-300'> signup
//        <span className='text-blue-500'>ChatApp</span>
//         </h1> 

//         <form>
//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-slate-300'>Full Name</span>
//             </label>
//               <input type="text" placeholder='Eshete Essayas' className='w-full input input-bordered h-10' />
//           </div>
          
//           <div>
//             <label className='label p-2'>
//                 <span className='text-base label-text text-slate-300'>Username</span>
//              </label>
//                <input type="text" placeholder='esheteesayas' className='w-full input input-bordered h-10' />
//           </div>

//           <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-slate-300'>Password</span>
//             </label>
//             <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />
//           </div>
//  <div>
//             <label className='label p-2'>
//               <span className='text-base label-text text-slate-300'>Confirm Password</span>
//             </label>
//             <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />
//           </div>
//        {/* GENDER CHECKBOX HERE */}
//           <GenderCheckbox />

//           <a href="#" className='text-sm text-slate-400 hover:text-blue-600 mt-4 inline-block'>
//             Already have an account?
//           </a>
//           <button type="submit" className='btn btn-block btn-sm mt-2 border border-slate-700'>
//             Sign Up
//           </button>

//         </form>
//       </div>
//       </div>
//   )
// }

// export default SignUp