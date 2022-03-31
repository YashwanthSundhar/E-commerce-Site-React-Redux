import React from 'react'

function NavBar(NavBarprops) {
  return (
   <h5 className="UserName">
        Hi, {NavBarprops.name}
   </h5>
  )
}

export default NavBar