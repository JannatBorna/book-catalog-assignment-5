import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import {
  HiOutlineTrash,
} from 'react-icons/hi';
import { Button } from './ui/button';
import { useAppSelector, useAppDispatch } from '../redux/hook';
import {  removeFromCart } from '../redux/features/cart/cartSlice';

export default function Edit() {
  
  
   const {products} = useAppSelector((state) => state.cart);
   const dispatch = useAppDispatch();


  return (
    <Sheet>
      <SheetTrigger>
        <Button>
          Edit
        </Button>
      </SheetTrigger>
      <SheetContent className="relative overflow-auto">
        <SheetHeader>
          <SheetTitle>Edit !!</SheetTitle>
        </SheetHeader>
        <div className="space-y-5">
          {products.map((product) => (
            <div
              className="flex justify-between p-5 border rounded-md h-44"
              key={product.author}
            >
              <div className="pr-5 border-r shrink-0">
                    <h1><b>Title:</b>{product?.no}</h1>
                    <h3 className="self-center text-2xl">{product?.author}</h3>
                    <h6><b>Title:</b>{product?.title}</h6>
                    <p><b>Genre</b>: {product?.genre}</p>
                    <p><b>Publication Date:</b> {product?.publicationDate}</p>
              </div>
              <div className="flex flex-col justify-between pl-5 border-l">
                <Button
                    onClick={() => dispatch(removeFromCart(product))}
                    variant="destructive"
                    className="bg-red-500 hover:bg-red-400"
                >
                  Edit
                </Button>
              </div>
            </div>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
