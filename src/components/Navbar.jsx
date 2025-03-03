import { Link, NavLink } from "react-router-dom";
import HireMe from "../shared/Button/HireMe";

const Navbar = () => {
    const menu = <>
    <li><NavLink to={"/"}>Home</NavLink></li>
    <li><NavLink to={"/about"}>About Me</NavLink></li>
    <li><NavLink to={"/skills"}>Skills</NavLink></li>
    <li><NavLink to={"/experience"}>Experience</NavLink></li>
    <li><NavLink to={"/projects"}>Projects</NavLink></li>
    <li><NavLink to={"/contact"}>Contact</NavLink></li>    
</>
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {
                                menu
                            }
                        </ul>
                    </div>
                    <Link className="btn btn-ghost text-xl">Eamran</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {
                        menu
                       }
                    </ul>
                </div>
                <div className="navbar-end">
                    <HireMe></HireMe>
                </div>
            </div>

        </div>
    );
};

export default Navbar;