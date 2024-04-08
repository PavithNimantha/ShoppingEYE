import { useEffect, useState } from "react";
import axios from "axios";
import toast from 'react-hot-toast';

const AddShop = () => {
  const [name, setName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [submit, setSubmit] = useState(false);
  const [emptySubmit, setEmptySubmit] = useState(false);

  const handleInputChange = (e) => { //set values to state variables
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "ownerName") {
      setOwnerName(value);
    }
  };

  useEffect(() => {
    setSubmit(name.length > 0 && ownerName.length > 0);
  }, [name, ownerName]);

  const handleEmptySubmit = () => {
    setEmptySubmit(true);
  };

  const sendData = (e) => {
    e.preventDefault();

    const newShop = {
      name,
      ownerName,
    };

      toast.promise(
        axios.post("http://localhost:4000/api/createshop", newShop),
        {
          loading: 'In Progress...',
          success: 'Shop Added Successfully',
          error: 'An error occurred while adding the shop',
        })
      setEmptySubmit(false);
      setName("");
      setOwnerName("");
  }

return (
 
    <div className="container px-5 pt-5">
      <form onSubmit={submit ? sendData : (e) => e.preventDefault()}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Shop Name
          </label>
          <input
            type="text"
            name="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="name"
            onChange={handleInputChange}
            value={name}
          />
          {name.length <= 0 && emptySubmit && (
            <p className="text-red-600">Name required</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="ownerName" className="form-label">
            Shop Owner Name
          </label>
          <input
            type="text"
            name="ownerName"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            id="ownerName"
            onChange={handleInputChange}
            value={ownerName}
          />
          {ownerName.length <= 0 && emptySubmit && (
            <p className="text-red-600">Shop Owner Name required</p>
          )}
        </div>

        {submit ? (
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
          >
            Submit
          </button>
        ) : (
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full opacity-50 cursor-not-allowed hover:cursor-not-allowed"
            onClick={handleEmptySubmit}
          >
            Submit
          </button>
        )}

      </form>
    </div>
  
  );
};

export default AddShop;
