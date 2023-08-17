import ProductCard from '../components/ProductCard';
// import { Label } from '../components/ui/label';
// import { Slider } from '../components/ui/slider';
// import { Switch } from '../components/ui/switch';
import { useToast } from '../components/ui/use-toast';
import Footer from '../layouts/Footer';
import { useGetProductsQuery } from '../redux/features/products/productApi';
// import { setPublicationDate, toggleState } from '../redux/features/products/productSlice';
import { useAppSelector } from '../redux/hook';
import { IProduct } from '../types/globalTypes';
// import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

export default function Products() {
  //!api 
  const {data, isLoading,error} = useGetProductsQuery(undefined)
  console.log(isLoading)
  console.log(error);
  console.log(data)
  const { toast } = useToast();
  console.log(toast)

  const {publicationDate, status } = useAppSelector((state) => state.product)


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
    <div>
    <Container>
      <h2 className='my-5 text-center'>ALL BOOKS</h2>
      <div className="product">
        {productsData?.map((product: IProduct) => (
          <ProductCard product={product} />
        ))}
      </div>
    </Container>
    <Footer />
    </div>
  );
}
