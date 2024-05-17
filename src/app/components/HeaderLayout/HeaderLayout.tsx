
const HeaderLayout = () => {
  
  return (
    <header className="bg-[#03344F] py-4">
      <div className="container mx-auto px-4">
        {/* Your header content goes here */}
        <div className="flex justify-between text-white bg-[#03344F]  ">
          <div className="logo" style={{ display: "contents" }}>
            <a className="flex items-center">
              <span className="text-4xl font-bold ">Avion</span>
            </a>
          </div>
          <div className="nav flex items-center">
            <nav>
              <ul className="flex space-x-4 text-2xl items-center">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <div className="mb-4">
            1
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderLayout;
