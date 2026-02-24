import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";
import Card from "./Card";

function Items({ currentItems }) {
  return (
    <div className="gap-10 flex flex-row flex-wrap mb-4 ml-27 -mt-67">
      {currentItems.map((item) => (
        <Card
          key={item.id}
          imgSRC={item.thumbnail}
          id={item.id}
          // cover={<img src={item.thumbnail} alt={item.title} />}
        >
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
        </Card>
      ))}
    </div>
  );
}

const Paginate = ({ itemsPerPage }) => {
  const Products = useSelector((state) => state.AllProducts.value);

  const safeProducts = Products || [];

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = safeProducts.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(safeProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />

      <ReactPaginate
        breakLabel="..."
        nextLabel="Next"
        previousLabel="Prev"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        containerClassName="flex gap-2 mt-6"
        activeClassName="bg-black text-white px-3"
      />
    </>
  );
};

export default Paginate;
