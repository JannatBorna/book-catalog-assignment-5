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
import { useAppSelector, useAppDispatch } from '../hook/useAuth';
import { addToCart, removeFromCart, removeOne } from '../redux/features/cart/cartSlice';

export default function Cart() {
  
  
   const {products, total} = useAppSelector((state) => state.cart);
   const dispatch = useAppDispatch();


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
              key={product.author}
            >
              <div className="pr-5 border-r shrink-0">
                <h1 className="self-center text-2xl">{product?.author}</h1>
              </div>
              <div className="flex flex-col w-full gap-3 px-2">
                <h1 className="self-center text-2xl">{product?.title}</h1>
                <p>Quantity: {product.genre}</p>
              </div>
              <div className="flex flex-col justify-between pl-5 border-l">
                <Button onClick={() => dispatch(addToCart(product))}>
                  <HiOutlinePlus size="20" />
                </Button>

                <Button onClick={() => dispatch(removeOne(product))}>
                  <HiMinus size="20" />
                </Button>

                <Button
                onClick={() => dispatch(removeFromCart(product))}
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
