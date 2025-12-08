
export default function Navbar({showFlavours}) {
  return (
    <nav className="flex justify-between items-center px-10 py-6">
      <h1 className="text-3xl font-bold">Juicy</h1>

      <ul className="flex gap-10 text-lg">
        <li className="hover:text-gray-300 cursor-pointer" onClick={showFlavours}>Flavour</li>
        <li className="hover:text-gray-300 cursor-pointer">Drinks</li>
        <li className="hover:text-gray-300 cursor-pointer">Fruit</li>
        <li className="hover:text-gray-300 cursor-pointer">About</li>
        <li className="hover:text-gray-300 cursor-pointer">Contact</li>
      </ul>

      <div className="flex items-center gap-6">
        <span className="relative cursor-pointer">
          <i className="fa-regular fa-bell text-xl"></i>
          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">

          </span>
        </span>
        <i className="fa-regular fa-user text-xl cursor-pointer"></i>
      </div>
    </nav>

  );
}
