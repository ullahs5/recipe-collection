import React from "react";
import { Nav, NavLink, NavMenu }
	from "./navbarElements";
import { Button } from "@mui/material";

const Navbar = () => {
	return (
		<>
			<Nav>
				<NavMenu>
					<NavLink to="/login" >
						Login
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default Navbar;
