import ProductCard from '../components/ProductCard';
import { Label } from '../components/ui/label';
import { Slider } from '../components/ui/slider';
import { Switch } from '../components/ui/switch';
import { useToast } from '../components/ui/use-toast';
import { useGetProductsQuery } from '../redux/features/products/productApi';
import { setPublicationDate, toggleState } from '../redux/features/products/productSlice';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { IProduct } from '../types/globalTypes';
// import { useEffect, useState } from 'react';

export default function Products() {
  //!api 
  const {data, isLoading,error} = useGetProductsQuery(undefined)
  console.log(isLoading)
  console.log(error);
  console.log(data)
  const { toast } = useToast();
  console.log(toast)

  const {publicationDate, status } = useAppSelector((state) => state.product)
  const dispatch = useAppDispatch();

  const handleSlider = (value: number[]) => {
    dispatch(setPublicationDate(value[0]));
    // console.log(value);
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
    <div className="relative grid grid-cols-12 mx-auto max-w-7xl ">
      <div className="col-span-3 z mr-10 space-y-5 border rounded-2xl border-gray-200/80 p-5 self-start sticky top-16 h-[calc(100vh-80px)]">
        <div>
          <h1 className="text-2xl uppercase">Availability</h1>
          <div onClick={() => dispatch(toggleState())} className="flex items-center mt-3 space-x-2">
            <Switch id="in-stock" />
            <Label htmlFor="in-stock">In stock</Label>
          </div>
        </div>
        <div className="space-y-3 ">
          <h1 className="text-2xl uppercase">no</h1>
          <div className="max-w-xl">
            <Slider
              defaultValue={[150]}
              max={150}
              min={0}
              step={1}
              onValueChange={(value) => handleSlider(value)}
            />
          </div>
          <div>From 0$ To {publicationDate}$</div>
        </div>
      </div>
      <div className="grid grid-cols-1 col-span-9 gap-10 pb-20">
        {productsData?.map((product: IProduct) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
