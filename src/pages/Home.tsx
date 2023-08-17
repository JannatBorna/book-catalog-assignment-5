// import { Spinner } from "react-bootstrap";
import Footer from "../layouts/Footer";
import { HomeProduct } from "./HomeProduct";
import { useGetProductsQuery } from "../redux/features/products/productApi";
import Spinner from "./Spinner";


export default function Home() {

const { isLoading} = useGetProductsQuery(undefined)
 if (isLoading) {
     return <Spinner/>
 }

  return (
    <div>
       <HomeProduct />
       <Footer />
    </div>

    
  )
}
