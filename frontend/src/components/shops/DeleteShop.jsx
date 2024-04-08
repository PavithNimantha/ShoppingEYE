import axios from 'axios';
import toast from 'react-hot-toast';

const handleDelete = async (id, setShops) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you sure you want to delete this shop?")) {
      // User confirmed, proceed with deletion
      await toast.promise(
          axios.delete(`http://localhost:4000/api/deleteshop/${id}`),
          {
              loading: 'In Progress...',
              success: 'Shop Deleted Successfully',
              error: 'An error occurred while deleting the shop',
          }
      );
      const res = await axios.get("http://localhost:4000/api/shops/");
      const data = await res.data;

        if (data) {
            setShops(data);
        }
  }
}

export { handleDelete };