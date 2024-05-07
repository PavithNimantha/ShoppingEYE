import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { handleDelete } from './delete-shop.component';

const AllShops = () => {
  const [allShops, setShops] = useState([]);

  useEffect(() => {
    const getShops = async () => {
      try {
        const res = await axios.get("http://localhost:4000/api/shops/allshops");
        const data = await res.data;

        if (data) {
          setShops(data);
        }
      } catch (err) {
        alert(err.message || "An error occurred while fetching data");
      }
    };

    getShops();
  }, []);


  return (
    <div className="container px-5">
      
    <div className="mt-5">
      <Link to="/add">
          <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700">Add Shop</button>
      </Link> 

      <div className="flex flex-row justify-center mt-5 overflow-hidden border border-gray-900 rounded-lg mx-44">
        <table className="w-full overflow-hidden text-center border-collapse rounded-lg ">
          <thead className="border-b bg-red-600/80">
            <tr>
              <th className="p-3 text-lg text-white ">ID</th>
              <th className="p-3 text-lg text-white ">SHOP NAME</th>
              <th className="p-3 text-lg text-white ">SHOP OWNER NAME</th>
              <th className="p-3 text-lg text-white ">DELETE</th>
            </tr>
          </thead>
          <tbody>
            {allShops.map((item) => (
              <tr key={item._id} className="border bg-orange-600/40 hover:bg-[#f8c3a8]">
                <td className="p-3">{item.shopId}</td>
                <td className="p-3">{item.shopName}</td>
                <td className="p-3">{item.shopOwnerName}</td>
                <td className="p-3">
                    <button onClick={() => handleDelete(item.shopId, setShops)}>DELETE</button>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default AllShops;
