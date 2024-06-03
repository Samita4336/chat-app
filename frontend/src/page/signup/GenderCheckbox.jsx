import React from 'react'

function GenderCheckbox({onCheckBoxChange, selectedGender}) {
  return (
      <div className='flex'>
          <div className='form-control'>
              <label className={`label gap-2 cursor-pointer ${selectedGender === "male" ? "seleted" : ""}`}>
                  <span className='label-text text-white'>Male</span>
                  <input type="checkbox" className='checkbox border-slate-300'
                      checked={selectedGender === 'male'}
                      onChange={() => onCheckBoxChange("male")}
                  />
              </label>
          </div>
          <div className='form-control'>
               <label className={`label gap-2 cursor-pointer ${selectedGender === "female" ? "seleted" : ""}`}>
                  <span className='label-text text-white'>Female</span>
                  <input type="checkbox" className='checkbox border-slate-300'
                      checked={selectedGender === "female"}
                      onChange={() => onCheckBoxChange("female")}
                  />
              </label>
              
          </div>
          
      </div>
  )
}

export default GenderCheckbox