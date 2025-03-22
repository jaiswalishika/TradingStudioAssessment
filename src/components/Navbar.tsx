import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { logout, login } from "../store/slices/loginSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const isLoggedIn = useSelector((state: RootState) => state.login.isLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogin = () => {
    dispatch(login());
    navigate("/screener");
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="text-xl font-bold text-gray-800">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-blue-500 flex items-center justify-center text-white rounded">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <span className="ml-2">TradingStudio</span>
            </div>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex md:flex items-center space-x-8">
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
              <button onClick={handleLogin} className="px-4 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">Login</button>
            ) : (
              <button onClick={handleLogout} className="px-4 py-1 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors">Logout</button>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-600 hover:text-gray-900 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden md:hidden mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-col space-y-4 px-2 pb-3">
            {!isLoggedIn ? (
              <>
                <NavLink 
                  to="/features" 
                  className={({ isActive }) => `px-3 py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 font-medium'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Features
                </NavLink>
                <NavLink 
                  to="/documentation" 
                  className={({ isActive }) => `px-3 py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 font-medium'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Documentation
                </NavLink>
                <NavLink 
                  to="/pricing" 
                  className={({ isActive }) => `px-3 py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 font-medium'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Pricing
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => `px-3 py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 font-medium'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
                <NavLink 
                  to="/faq" 
                  className={({ isActive }) => `px-3 py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 font-medium'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQ
                </NavLink>
                <button 
                  onClick={() => {
                    handleLogin();
                    setIsMenuOpen(false);
                  }} 
                  className="px-4 py-2 bg-blue-600 text-white rounded-md w-full"
                >
                  Login
                </button>
              </>
            ) : (
              <>
                <NavLink 
                  to="/screener" 
                  className={({ isActive }) => `px-3 py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 font-medium'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Screener
                </NavLink>
                <NavLink 
                  to="/strategy" 
                  className={({ isActive }) => `px-3 py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 font-medium'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Strategy
                </NavLink>
                <NavLink 
                  to="/portfolio" 
                  className={({ isActive }) => `px-3 py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 font-medium'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Portfolio
                </NavLink>
                <NavLink 
                  to="/simulator" 
                  className={({ isActive }) => `px-3 py-2 ${isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 font-medium'}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Simulator
                </NavLink>
                <div className="px-3 py-2 text-gray-500 font-medium">
                  99M Tokens
                </div>
                <button className="bg-blue-100 text-blue-600 font-medium px-4 py-2 rounded-md w-full">
                  Alert Subscription
                </button>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }} 
                  className="px-4 py-2 bg-red-600 text-white rounded-md w-full"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;