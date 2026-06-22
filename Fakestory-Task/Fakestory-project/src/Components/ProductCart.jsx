import {link} from 'react-routter-dom';

function ProductCart(){
    return(
        <h2>
             <Link to="/Products"  style={{ color: 'white' }}>Products</Link>
      <Link to="/ProductDetails" style={{ color: 'white' }}>ProductDetails</Link>
        </h2>
    )
};
export default  ProductCart;

 