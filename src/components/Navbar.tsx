
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { logout, login } from "../store/slices/loginSlice";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());
    navigate("/screener");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-md border-b">
      
      <NavLink to="/" className="text-xl font-bold text-gray-800">TradingStudio</NavLink>

      <div className="flex space-x-6">
        {!isLoggedIn ? (
          <>
            <NavLink to="/features" className={({ isActive }) => `pb-2 ${isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-700 font-medium'}`}>Features</NavLink>
            <NavLink to="/documentation" className={({ isActive }) => `pb-2 ${isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-700 font-medium'}`}>Documentation</NavLink>
            <NavLink to="/pricing" className={({ isActive }) => `pb-2 ${isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-700 font-medium'}`}>Pricing</NavLink>
            <NavLink to="/contact" className={({ isActive }) => `pb-2 ${isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-700 font-medium'}`}>Contact</NavLink>
            <NavLink to="/faq" className={({ isActive }) => `pb-2 ${isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-700 font-medium'}`}>FAQ</NavLink>
          </>
        ) : (
          <>
            <NavLink to="/screener" className={({ isActive }) => `pb-2 ${isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-700 font-medium'}`}>Screener</NavLink>
            <NavLink to="/strategy" className={({ isActive }) => `pb-2 ${isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-700 font-medium'}`}>Strategy</NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => `pb-2 ${isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-700 font-medium'}`}>Portfolio</NavLink>
            <NavLink to="/simulator" className={({ isActive }) => `pb-2 ${isActive ? 'text-blue-600 font-semibold border-b-2 border-blue-600' : 'text-gray-700 font-medium'}`}>Simulator</NavLink>
            <span className="text-gray-500 font-medium">99M Tokens</span>
            <button className="bg-blue-100 text-blue-600 font-medium px-4 py-2 rounded-md hover:bg-blue-200">Alert Subscription</button>
          </>
        )}

        {!isLoggedIn ? (
          <button onClick={handleLogin} className="px-4 py-2 bg-blue-600 text-white rounded-md">Login</button>
        ) : (
          <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-md">Logout</button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;