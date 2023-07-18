import { IProduct } from '../types/globalTypes';
import { toast } from './ui/use-toast';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hook';
import { addToCart } from '../redux/features/cart/cartSlice';import {
Table,
TableBody,
TableCell,
TableHead,
TableHeader,
TableRow,} from "../components/ui/table"



interface IProps {
  product: IProduct;
}

export default function HomeProductCard({ product }: IProps) {

const dispatch = useAppDispatch()


  const handleAddProduct = (product: IProduct) => {
    console.log(product);
    //dispatch
    dispatch(addToCart(product)); // payload হিসেবে product কে পাছ করে দিতে হবে 

    
    toast({
      description: 'Product Added',
    });
  };
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Author</TableHead>
          <TableHead>Title</TableHead>
          <TableHead>Genre</TableHead>
          <TableHead>PublicationDate</TableHead>
          <TableHead>Cart</TableHead>
          <TableHead>Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        
          <TableRow>
            <TableCell className="font-medium"><h1 className="text-xl font-semibold">{product?.author}</h1>
            </TableCell>
            <TableCell>{product?.title}</TableCell>
            <TableCell>{product?.genre}</TableCell>
            <TableCell>{product?.publicationDate}</TableCell>
            <TableCell className="text-right">
               <Button variant="default" onClick={() => handleAddProduct(product)} className=''>
               Add to cart
              </Button>
            </TableCell>
            <TableCell className="text-right">
              <Button> <Link to={`/product-details/${product._id}`} >Details</Link></Button>
            </TableCell>
          </TableRow>
      </TableBody>
    </Table>

  );
}
