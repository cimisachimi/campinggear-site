import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'

const CartItems = () => {
    const {all_products, CartItems, removeFromCart} = useContext(ShopContext);
  return (
    <section>
        <table>
             <thead>
                <tr>
                    <th className='p-1 py-2'>Product</th>
                    <th className='p-1 py-2'>Title</th>
                    <th className='p-1 py-2'>Price</th>
                    <th className='p-1 py-2'>Quantity</th>
                    <th className='p-1 py-2'>Total</th>
                    <th className='p-1 py-2'>Remove</th>
                </tr>
             </thead>
             <tbody>
                {all_products.map((e)=>{
                    if (CartItems[e.id]>0) {
                        return <tr>
                            <td><img src={e.image} alt="" /></td>
                        </tr>
                    }
                })}
             </tbody>
        </table>
    </section>
  )
}

export default CartItems
