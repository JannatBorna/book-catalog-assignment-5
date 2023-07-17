import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import {
  HiMinus,
  HiOutlinePlus,
  HiOutlineShoppingCart,
  HiOutlineTrash,
} from 'react-icons/hi';
import { Button } from './ui/button';
import { IProduct } from '../types/globalTypes';

export default function Cart() {
  //! Dummy data

  const products: IProduct[] = [];
  const total = 0;

  //! **

  return (
    <Sheet>
      <SheetTrigger>
        <Button variant="ghost">
          <HiOutlineShoppingCart size="25" />
        </Button>
      </SheetTrigger>
      <SheetContent className="relative overflow-auto">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <h1>Total: {total.toFixed(2)}</h1>
        </SheetHeader>
        <div className="space-y-5">
          {products.map((product) => (
            <div
              className="flex justify-between p-5 border rounded-md h-44"
              key={product.name}
            >
              <div className="pr-5 border-r shrink-0">
                <img src={product?.image} alt="" className="h-full" />
              </div>
              <div className="flex flex-col w-full gap-3 px-2">
                <h1 className="self-center text-2xl">{product?.name}</h1>
                <p>Quantity: {product.quantity}</p>
                <p className="text-xl">
                  Total Price: {(product.price * product.quantity!).toFixed(2)}{' '}
                  $
                </p>
              </div>
              <div className="flex flex-col justify-between pl-5 border-l">
                <Button>
                  <HiOutlinePlus size="20" />
                </Button>
                <Button>
                  <HiMinus size="20" />
                </Button>
                <Button
                  variant="destructive"
                  className="bg-red-500 hover:bg-red-400"
                >
                  <HiOutlineTrash size="20" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
