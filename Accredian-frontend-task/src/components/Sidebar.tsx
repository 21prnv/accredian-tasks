const Sidebar = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full z-40 w-64 bg-white shadow-lg transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out`}
    >
      <button onClick={onClose} className="absolute top-4 right-4 text-black">
        Close
      </button>
      <nav className="mt-16">
        <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">
          Refer & Earn
        </a>
        <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">
          Resources
        </a>
        <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">
          About Us
        </a>
        <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">
          Login
        </a>
        <a href="#" className="block px-4 py-2 text-black hover:bg-gray-200">
          Try for free
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
