import React, {useId} from "react";
import { NavLink } from "react-router-dom";
import { MdAddBusiness, MdViewList } from "react-icons/md";

export const Sidebar = () => {
	const id = useId()
	console.log(id);
  return (
    <aside>
      <ul className="menu bg-base-100 p-2 gap-2 rounded-box">
        <li >
          <NavLink id={id} style={{padding: '10px'}} className="bg-base-200 text-2xl" to={'/'}>
            <MdAddBusiness />
          </NavLink>
        </li>
        <li >
          <NavLink id={id} style={{padding: '10px'}} className="bg-base-200 text-2xl" to={'viewlist'}>
            <MdViewList />
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};
