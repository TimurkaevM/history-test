import React from 'react'
import { NavLink } from 'react-router-dom'

function index() {
  return (
    <div>
      <NavLink to='/auth'>auth</NavLink>
      <NavLink to='/register'>reg</NavLink>
    </div>
  )
}

export default index
