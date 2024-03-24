const Header = () => {
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2 sm:bg-yellow-50">
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Home</li>
          <li className="px-4">About</li>
          <li className="px-4">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
