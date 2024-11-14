import { Link } from "react-router-dom";
import userIcon from "../assets/user.png"
import { useContext } from "react";
import { AuthContext } from "../Privider/AuthProvider";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <div className="flex justify-between">
            <div>{user && user.email}</div>
            <div className="nav space-x-5">
                <Link to = '/'>Home</Link>
                <Link to = '/carrier'>Carrier</Link>
                <Link to = '/about'>About</Link>

            </div>
            <div className="login flex items-center gap-2">
                <div>
               {
                user && user?.email? <div className="flex items-center">
                    <img src={user.photoURL} className="w-10 rounded-full" alt="" />
                    <p>{user.displayName}</p>
                </div> :  <img src={userIcon} alt="" />
               }
                </div>
                {
                    user && user?.email? ( <Link onClick={logOut} to = '/auth/login' className="btn btn-neutral rounded-none">Log Out</Link>) :  <Link to = '/auth/login' className="btn btn-neutral rounded-none">Login</Link>
                }
               
            </div>
            
        </div>
    );
};

export default Navbar;