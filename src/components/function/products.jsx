import Product from './product';
import { useContext } from 'react';
import ProductsContext from '../../context/product';

const Products = (props) => {
    const productsContext =useContext(ProductsContext);
    
    return ( 
        <>
         <button onClick={productsContext.onReset} className='btn btn-danger'>Reset</button>
         {productsContext.Products.map((p,index)=>(
                <Product   
                id={p.id} key={index} 
                productName={p.productName} 
                count={p.count}/>
            ))}
        </>
     );
    
}
 
export default Products;