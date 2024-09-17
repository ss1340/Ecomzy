import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="">
  {
    cart.length > 0  ? 
    (<div className="flex">


      <div className="grid col-end-20  gap-30 font-bold  lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-1 space-x-5 min-h-[50vh]">
        {
          cart.map( (item,index) => {
            return  <CartItem  className="gap-y-6"
               key={item.id} 
              item={item} 
              itemIndex={index} 
            />
            
          } )
        }
      </div>

      <div className="mr-10">

        <div className="">
          <div className="text-green-500 text-2xl font-bold mt-10 mr-10">Your Cart</div>
          <div className="text-green-500 text-5xl font-bold">Summary</div>
          <p className="my-8 font-bold">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div>
          <p className="my-7 px-9 font-bold">Total Amount: ${totalAmount}</p>
          <button className="bg-green-500 hover:bg-black my-7 rounded-2xl py-5 px-12 font-bold text-white">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div className="flex  flex-col  justify-center  items-center    ">
      <h1 className="text-black text-2xl font-bold mt-32">Your Cart is Empty</h1>
      <Link to={"/"}>
        <button className="bg-green-500 hover:bg-black my-7 rounded-2xl py-5 px-12 font-bold text-white ">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
