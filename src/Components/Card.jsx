import { Rate } from "antd";
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Bounce, toast } from 'react-toastify';
import { useNavigate } from "react-router";
import { CartReducer } from "../Slice/ProductSlice";
import Flex from "./Flex";
const Card = ({
  imgSRC,
  title,
  discount,
  price,
  review,
  percentage,
  rating,
  id,
  ProductData,
}) => {
  let navigate = useNavigate();
  let cardData = useSelector((state) => state.AllProducts.Cart);
  console.log(cardData);

  const dispatch = useDispatch(CartReducer(ProductData));

  const handleProductDetails = () => {
    navigate(`/ProductDetails/${id}`);

    const notify= (matchitem) =>{
   
       matchitem== undefined ?

   

      toast("Product Succesfully added", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
      
      
      
      
     
        }) :
   
   toast.warn('Product Already Added', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
   
   
  
  
  
    } 
    

    localStorage.setItem("CartPages", JSON.stringify(ProductData));
  };

  const handleAddCart = () => {
    const matchitem = cardData.find((item) => item.id == id);

     
    if (!matchitem) {
      dispatch(CartReducer(ProductData));
    }
   
     notify(matchitem)

  };

  return (
    <>
      <div onClick={handleProductDetails} className="group flex w-67.5">
        <div className="relative overflow-hidden">
          <div>
            <img
              className="cursor-pointer"
              src={imgSRC}
              alt="console onClick={handleProductDetails} "
            />
            <div className="flex justify-between absolute">
              <h3 className="bg-primary py-1 px-3 rounded-sm text-white top-0 left-0 w-full h-fit p-3">
                -{percentage}%{" "}
              </h3>
              <div>
                <CiHeart className="w-6 h-6 rounded-full bg-white flex justify-center items-center" />
                <FaRegEye className="W-8.5 h-8.5 rounded-full bg-white flex justify-center items-center" />
              </div>
              <div></div>
            </div>

            <button
              onClick={handleAddCart}
              className="bg-black text-white py-3 absolute -bottom-6 left-0 group-hover:bottom-0 duration-150 ease-linear cursor-pointer"
            >
              Add To Cart
            </button>
          </div>
          <h2 className="font-poppins font-medium">{title}</h2>
        </div>
        <Flex>
          <h3 className="text-primary">{discount}</h3>
          <h3 className="line-through">{price}</h3>
        </Flex>
        <div className="flex text-amber-300 mt-10 items-center">
          {/* <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar /> */}
          <Rate allowHalf defaultValue={rating} />
        </div>
        <div>
          <h3 className=" flex items-center ">({review})</h3>
        </div>
      </div>
    </>
  );
};

export default Card;
