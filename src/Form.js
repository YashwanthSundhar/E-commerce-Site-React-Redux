import React from 'react'

export default function Form(UserInputprops) {
  return (
    <input
    type={UserInputprops.type}
    ref={UserInputprops.ref}
    value={UserInputprops.value}
    placeholder={UserInputprops.placeholder}
    onChange={UserInputprops.onChange}
    
    />
  )
}
