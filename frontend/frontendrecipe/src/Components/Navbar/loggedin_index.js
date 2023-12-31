import React from "react";
import { Nav, NavLink, NavMenu }
	from "./navbarElements";
import { Button } from "@mui/material";


const NavbarIn = () => {
	return (
		<>
			<Nav>
			<a style={{paddingTop:"2.2%"}}>{localStorage.getItem('email')}</a>
				<NavMenu>
					<NavLink to="/home">
						Home
					</NavLink>
					<NavLink to="/pictures" >
						My Pictures
					</NavLink>
                    <NavLink to="/myrecipes" >
						My Recipes
					</NavLink>
				</NavMenu>
			</Nav>
		</>
	);
};

export default NavbarIn;
