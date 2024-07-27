import "./style.css"
import { useDispatch, useSelector } from "react-redux"
import { appLogout } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { name } = useSelector((e) => e.auth);
    const isAuthorized = useSelector((state) => state.auth.isAuthorized);

    const handleLogin = () => {
        navigate("/login");
    };

    const handleSignup = () => {
        navigate("/signup");
    };

    const handleLogout = () => {
        dispatch(appLogout());
    }

    const handleNavigation = (path) => {
        navigate(path);
    };


    return (
        <nav className="navbar-container">
            <div className="navbar-left-item">
                <a href="/" className="navbar-logo">
                    CloudHome
                </a>
            </div>
            <div>
                {!isAuthorized ? (
                    <>
                        <ul className="navbar-menu">
                            <li><a href="#about" >About Us</a></li>
                            <li><a href="#contact" >Contact</a></li>
                        </ul>
                    </>
                ) : (
                    <ul className="navbar-menu">
                        <li><a className="active" href="#" > Home</a></li>
                        <li><a href="#about" onClick={() => handleNavigation('/aboutus')}>About Us</a></li>
                    </ul>
                )}
            </div>

            <div className="navbar-right-item">
                {!isAuthorized ? (
                    <>
                        <button onClick={handleLogin}>Login</button>
                        <button onClick={handleSignup}>Sign Up</button>
                    </>
                ) : (
                    <>
                        <h3 className="user-name">{name}</h3>
                        <button onClick={handleLogout}><i class="fa-solid fa-right-from-bracket"></i>&nbsp;Logout</button>
                    </>

                )}
            </div>
        </nav>
    )
}
export default Navbar;