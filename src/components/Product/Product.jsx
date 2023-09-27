import { useLoaderData, useNavigate } from "react-router-dom";

const Product = () => {
    
    const data = useLoaderData();
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
        // window.history.back();
    }

    return (
       
      <div className="max-w-7xl mx-auto">
                

<img className="p-8 rounded-t-lg object-contain w-full h-96" src={data.thumbnail} alt="product image"/>

<div className="px-5 pb-5">
  <h5 className="text-xl font-semibold tracking-tight text-gray-900"><span className="text-sky-600 text-2xl">Title:</span> {data.title}</h5>
  <h5 className="text-xl font-semibold tracking-tight text-gray-900"><span className="text-sky-600 text-2xl">Description:</span> {data.description}</h5>
  <h5 className="text-xl font-semibold tracking-tight text-gray-900"><span className="text-sky-600 text-2xl">Discount:</span> {data.discountPercentage} %</h5>
  <h5 className="text-xl font-semibold tracking-tight text-gray-900"><span className="text-sky-600 text-2xl">Rating:</span> {data.rating} ★</h5>
  <h5 className="text-xl font-semibold tracking-tight text-gray-900"><span className="text-sky-600 text-2xl">In Stock:</span> {data.stock}</h5>
  <h5 className="text-xl font-semibold tracking-tight text-gray-900"><span className="text-sky-600 text-2xl">Brand:</span> {data.brand}</h5>
  <h5 className="text-xl font-semibold tracking-tight text-gray-900"><span className="text-sky-600 text-2xl">Category:</span> {data.category}</h5>
  {/* <img className="p-8 rounded-t-lg object-contain w-full h-96" src={data.images[0]} alt="product image"/>
  <img className="p-8 rounded-t-lg object-contain w-full h-96" src={data.images[1]} alt="product image"/>
  <img className="p-8 rounded-t-lg object-contain w-full h-96" src={data.images[2]} alt="product image"/>
  <img className="p-8 rounded-t-lg object-contain w-full h-96" src={data.images[3]} alt="product image"/> */}
 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
 {
    data.images.map((image) => (
      <img className="p-8 rounded-t-lg object-contain w-full h-96 border border-cyan-300" key={image.id} src={image} alt="product image"/>
      
    ))
  }
 </div>

   
   <div className="text-center mt-5">
   <button onClick={handleBack} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full">Go BACK </button>
   </div>
   




</div>
      </div>
    );
};

export default Product;