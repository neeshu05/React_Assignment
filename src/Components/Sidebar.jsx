import { FaTachometerAlt, FaChevronDown, FaPhone, FaSignOutAlt } from "react-icons/fa";
import { MdOutlineDevices, MdReport, MdPeople, MdMiscellaneousServices } from "react-icons/md";
import { BiSolidError } from "react-icons/bi";
import { RiFileList2Line } from "react-icons/ri";
import c from "../c.png";
const Sidebar = () => {
  return (
    <div className="bg-[#0E1C2F] text-white min-h-screen w-64 flex flex-col p-4">
      <div>
        <div className="mb-10 flex items-center justify-center my-4">
          <span className="text-white font-light">
            <img src={c} className="w-20 h-10"></img>
          </span>
        </div>

        <nav className="space-y-4">
          <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" />
          <SidebarItem icon={<MdOutlineDevices />} label="Assets" hasDropdown />
          <SidebarItem icon={<BiSolidError />} label="Incidents" />
          <SidebarItem icon={<MdMiscellaneousServices />} label="Services" />
          <SidebarItem icon={<RiFileList2Line />} label="Request" />
          <SidebarItem icon={<MdPeople />} label="Users" hasDropdown />
          <SidebarItem icon={<MdReport />} label="Reports" hasDropdown />
        </nav>
      </div>

      <div className="absolute bottom-0 w-40 py-2 my-2">
  <SidebarButton icon={<FaPhone />} label="Contact us" />
  <SidebarButton icon={<FaSignOutAlt />} label="Log Out" />
</div>
    </div>
  );
};

const SidebarItem = ({ icon, label, hasDropdown }) => (
  <div className="flex items-center justify-between hover:text-blue-400 cursor-pointer px-2">
    <div className="flex items-center space-x-3">
      <span className="text-lg">{icon}</span>
      <span>{label}</span>
    </div>
    {hasDropdown && <FaChevronDown className="text-xs" />}
  </div>
);

const SidebarButton = ({ icon, label }) => (
  <button className="w-full border border-white text-white py-2 rounded-full flex items-center justify-center space-x-2 hover:bg-white hover:text-[#0E1C2F] transition duration-200 my-2">
    <span className="text-sm">{icon}</span>
    <span className="text-sm">{label}</span>
  </button>
);

export default Sidebar;
