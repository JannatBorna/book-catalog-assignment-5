import { useState } from "react";
import { useGetProductsQuery } from "../redux/features/products/productApi";
import { useToast } from "../components/ui/use-toast";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { setPublicationDate } from "../redux/features/products/productSlice";
import HomeProductCard from "../components/HomeProductCart";
import { IProduct } from '../types/globalTypes';
import { Container } from 'react-bootstrap';
import './HomeProduct.css';

export function HomeProduct() {
    const [limit, setLimit] = useState(10);
    //!api 
const {data, isLoading,error} = useGetProductsQuery(undefined)
console.log(setLimit);
console.log(isLoading)
console.log(error);
console.log(data)
const { toast } = useToast();
console.log(toast)
const {publicationDate, status } = useAppSelector((state) => state.product)
const dispatch = useAppDispatch();
const handleSlider = (value: number[]) => {
  dispatch(setPublicationDate(value[0]));
   console.log(handleSlider);
};
let productsData;
if (status) {
  productsData = data?.data?.filter(
    (item: { status: boolean; no: number; }) => item.status === true && item.no < publicationDate
  );
} else if (publicationDate > 0) {
  productsData = data?.data?.filter((item: { no: number; }) => item.no < publicationDate);
} else {
  productsData = data?.data;
}
  return (
    <Container>
    <div className="product">
    
  {productsData?.slice(0, limit ? limit : productsData.length).map((product: IProduct) => (
    <HomeProductCard product={product} />
  ))}
    </div>
    </Container>
  )
}
