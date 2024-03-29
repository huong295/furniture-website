// components/Sidebar.js

const Sidebar = () => {
    return (
      <aside className=" p-4">
        <h2 className="text-xl font-bold mb-4">Filters</h2>
        <div>
          <h3 className="text-lg font-semibold mb-2">Category</h3>
          <ul>
            <li className="mb-1"><input type="checkbox" id="category1" /><label htmlFor="category1" className="ml-2">Category 1</label></li>
            <li className="mb-1"><input type="checkbox" id="category2" /><label htmlFor="category2" className="ml-2">Category 2</label></li>
            {/* Add more categories as needed */}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Price Range</h3>
          <select className="block w-full border border-gray-300 p-2">
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            {/* Add more price ranges as needed */}
          </select>
        </div>
      </aside>
    );
  };
  
  export default Sidebar;
  