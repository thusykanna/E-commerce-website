import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
// import { set } from 'mongoose';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

const Verify = () => {

    const { navigate, token, setCartItems, backendUrl } = useContext(ShopContext);
    const [searchParams, setSearchParams] = useSearchParams();

    const success = searchParams.get('success');
    const orderId = searchParams.get('orderId');

    const verifyPayment = async () => {
        try {
            if (!token) {
                return null;
            }
            const response = await axios.post(`${backendUrl}/api/order/verifyStripe`, {success,  orderId }, { headers: { token } });

            if (response.data.success) {
                setCartItems({});
                navigate('/Orders');
            } else {
                navigate('/cart');
            }

        } catch (error) {
            console.log(error);
            toast.error(error.message);
        }
    }

    useEffect(() => {
        verifyPayment();
    }, [token])

    return (
        <div>

        </div>
    )
}

export default Verify
