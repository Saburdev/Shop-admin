import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdAddBusiness , MdViewList} from "react-icons/md"

export const Sidebar = () => {
  return (
    <aside>
        <ul className="menu bg-base-100 p-2 gap-2 rounded-box">
  <li >
      <NavLink style={{padding:'10px'}} className=" text-2xl" to={'/'}>
        <MdAddBusiness/>
      </NavLink>
  </li>
  <li>
        <NavLink style={{padding:'10px'}} className=" text-2xl" to={'viewlist'}>
            <MdViewList/>
        </NavLink>
  </li>
</ul>
    </aside>
  )
}