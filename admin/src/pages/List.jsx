import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { backendUrl, currency } from '../App';
import { toast } from 'react-toastify';

const List = ({token}) => {
  const [list, setList] = useState([]); // Initialize as an empty array
  const [loading, setLoading] = useState(true);

  const fetchList = async () => {
    try {
      const response = await axios.get(backendUrl + '/api/product/list');
      if (response.data.products) {
        setList(response.data.products); // Set the list state
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const removeProduct = async (id) => {
    try {
      
      const respone = await axios.post(backendUrl + '/api/product/remove', { id }, {headers: {token}});

      if (respone.data.success) {
        toast.success(respone.data.message);
        await fetchList(); 
      } else{
        toast.error(respone.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  }

  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className='flex flex-col gap-2'>
        <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] item-center py-1 px-2 border bg-gray-100 text-sm'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Actions</b>
        </div>
        {Array.isArray(list) && list.map((item, index) => (
          <div key={index} className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'>
            <img src={item.image[0]} alt={item.name} className='w-12' />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>{currency}{item.price}</p>
            <p onClick={() => removeProduct(item._id)} className='text-right md:text-center cursor-pointer text-lg text-red-600'>X</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default List;