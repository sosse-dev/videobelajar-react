import { useAuth } from "@/hooks/use-auth";
import { Link } from "react-router-dom";
import defaultProfilPicture from "../../../../assets/avatar.png";
import MobileDropdown from "./MobileDropdown";
import Dropdown from "./Dropdown";
import logo from "../../../../assets/videobelajar-logo.png";

export default function Navbar({
  avatar,
  showDropdown,
}: {
  avatar?: string;
  showDropdown: boolean;
}) {
  const user = useAuth();
  return (
    <nav className="w-full max-w-6xl relative left-0 right-0 inset-0 m-auto flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white shadow-lg md:shadow-none">
      {/* Videobelajar logo */}
      <Link to="/" className="w-[237px] h-[56px]">
        <img src={logo} className="h-[40px] mt-3 ml-0" alt="Logo" />
      </Link>

      {/* Navbar Mobile */}
      <MobileDropdown showDropdown={showDropdown} />

      {/* Navbar Tablet and Desktop */}
      <div
        className={`items-center gap-9 ${
          showDropdown ? "hidden md:flex" : "hidden"
        }`}
      >
        <Dropdown />
        {user?.email && user.name ? (
          <img
            src={avatar || defaultProfilPicture}
            className="w-11 h-11 rounded-lg"
            alt="Avatar"
          />
        ) : (
          // For non-logged-in user
          <div className="flex gap-x-3">
            <Link to="/login">
              <button className="bg-[#3ecf4c] text-white font-bold py-2 px-7 rounded-xl w-full md:w-auto cursor-pointer hover:opacity-80">
                Login
              </button>
            </Link>
            <Link to="/signup">
              <button
                type="submit"
                className="border border-[#3ecf4c] text-[#3ecf4c] font-bold py-2 px-7 rounded-xl w-full md:w-auto cursor-pointer hover:opacity-80"
              >
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
