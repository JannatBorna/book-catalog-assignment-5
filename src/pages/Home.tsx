import Footer from "../layouts/Footer";
import { useGetProductsQuery } from "../redux/features/products/productApi";
import Spinner from "./Spinner";
import Banner from "./Banner";
import { HomeProduct } from "./HomeProduct";


export default function Home() {

const { isLoading} = useGetProductsQuery(undefined)
 if (isLoading) {
     return <Spinner/>
 }

  return (
    <div>
      <Banner />
       <HomeProduct />
       <Footer />
    </div>

    
  )
}
