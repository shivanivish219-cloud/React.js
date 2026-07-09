import { useLocation } from "react-router";

function ProductLocation(){
    const location = useLocation();
     
    console.log(location.state);

    return(

        <>
        <h2>{location.state?.title}</h2>
      <p>{location.state?.description}</p>
      </>
    )
}

export default ProductLocation;
