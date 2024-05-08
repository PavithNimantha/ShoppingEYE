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
        axios.post("http://localhost:4000/api/shops/createshop", newShop),
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
 
  <div className="flex flex-col px-5 py-32 pt-2 scroll-m-1 scroll-smooth ">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className='items-center overflow-hidden'>
              <div className=''>
                  <div class="grid grid-cols-1 gap-4 content-start pt-5 px-20">
                    <form onSubmit={submit ? sendData : (e) => e.preventDefault()} className="px-12 py-12 border-2 rounded-lg shadow-md bg-gray-50">
                      <div class="">
                        <p className='text-4xl font-semibold text-black uppercase'>Create Shop</p>
                          <div className="grid grid-cols-1 gap-4 form-group">
                            <div class="">
                              <label className='block mb-2 text-lg font-medium text-gray-900 '>
                                Shop Name
                              </label>
                              <input
                                  type="text"
                                  name="name"
                                  className="form-control"
                                  id="name"
                                  onChange={handleInputChange}
                                  value={name}
                              />
                                {name.length <= 0 && emptySubmit && (
                                <p className="text-red-600">Name required</p>
                                )}
                            </div>
                          </div>
                        
                        <div className="form-group">
                        <label className='block mb-2 text-lg font-medium text-gray-900 '>
                          ShopOwnerName
                        </label>
                        <input
                          type="text"
                          name="ownerName"
                          className="form-control"
                          id="ownerName"
                          onChange={handleInputChange}
                          value={ownerName}
                        />
                        {ownerName.length <= 0 && emptySubmit && (
                          <p className="text-red-600">Shop Owner Name required</p>
                        )}
                        </div>
                        </div>

                      {submit ? (
                      <button
                        type="submit"
                        className="px-4 py-2 mt-3 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700"
                      >
                        Submit
                      </button>
                      ) : (
                      <button 
                        className="px-4 py-2 mt-3 font-bold text-white bg-blue-500 rounded-full opacity-50 cursor-not-allowed hover:cursor-not-allowed"
                        onClick={handleEmptySubmit}
                      >
                      Submit
                    </button>
                  )}
                  </form>
                </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default AddShop;
