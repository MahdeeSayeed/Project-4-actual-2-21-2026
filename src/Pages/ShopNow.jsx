import { Skeleton } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import BreadCrumbs from "../Components/BreadCrumbs";
import  Container  from "../Components/Container";
import Paginate from "../Components/Paginate";
import { ProductReducer } from "../Slice/ProductSlice";
const ShopNow = (price) => {
  const [Products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [value, setvalue] = useState(6);
  const dispatch = useDispatch();


  useEffect(() => {
    async function getdata() {
      await axios.get("https://dummyjson.com/products").then((data) => {
        setProducts(data.data.products);
        console.log(Products);
        dispatch(ProductReducer(data.data.products));
        setLoading(true);
      });
    }
    getdata();
  }, []);

  useEffect(() => {
    const uniqueCategory = [...new Set(Products.map((item) => item.category))];

    console.log(uniqueCategory);
    setCategory(uniqueCategory);
  }, [Products]);

  const handleFilterItem = (item) => {
    const filterCategory = Products.filter(
      (category) => item.cateogory == item,
    );

    console.log(filterCategory);
  };
  const handleClick = (item) => {
    const FilterItem = Products.filter(
      (Categoryitem) => Categoryitemitem.category == item,
    );

    dispatch(CategoryReducer(filterCategory));
  };

  const handleValue = (e) => {
    setvalue(e.target.value);
  };

  return (
    <Container>
      <div>
        <div className="py-40 flex justify-between flex-wrap -mt-14">
          <div>
            <BreadCrumbs />
            <div className="flex justify-between gap-186">
              <div>
                <h1 className="w-37 font-bold text-20px mb-3.75 mr-29 gap-y-3">
                  <br />
                  Shop By Category
                </h1>
              </div>

              <select onChange={handleValue}>
                <p>Show</p>
                <option value="6">6</option>
                <option value="9">9</option>
                <option value="10">12</option>
              </select>
            </div>

            <div className="flex">
              <ul className=" flex-col gap-4">
                <li
                  className="capitalize cursor-pointer "
                  onClick={() => dispatch(ProductReducer(Products))}
                  key="all"
                >
                  All Products
                </li>

                {category.map((item, idx) => {
                  return (
                    <li
                      className="capitalize cursor-pointer"
                      onClick={() => handleFilterItem(item)}
                      key={idx}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <div>
          {Loading ? (
            <Paginate itemsPerPage={4} />
          ) : (
            <>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </>
          )}
        </div>
      </div>
    </Container>
  );
};

export default ShopNow;
