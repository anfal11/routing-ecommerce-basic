import { useLoaderData } from "react-router-dom";
import ProductCard from "./ProductCard";

const Products = () => {
    const {products} = useLoaderData();

    return (
           <div>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-4">
                {
                    products?.map ( (product) => 
                        <ProductCard key={product.id} product={product}></ProductCard>
                        
                    )
                }
            </div>
        </div>
    );
};

export default Products;