import { IProduct } from '../types/globalTypes';
import { toast } from './ui/use-toast';
// import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hook';
import { addToCart } from '../redux/features/cart/cartSlice';
import Card from 'react-bootstrap/Card';
// import {
// Table,
// TableBody,
// TableCell,
// TableHead,
// TableHeader,
// TableRow,} from "../components/ui/table"



interface IProps {
  product: IProduct;
}

export default function ProductCard({ product }: IProps) {

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
      <div className='my-3'>
      <Card style={{ width: '26rem' }}>
      <Card.Body>
        <Card.Title>
          <h4>Author: {product?.author}</h4>
        </Card.Title>
        <Card.Text><b>Title:</b> {product?.title}</Card.Text>
        <Card.Text>
        <p style={{ display:"flex", justifyContent:"space-between", width:"100%", color:"gray", margin:"10px 0px" }} >
          <span><b>Genre:</b> {product?.genre}</span>
          <span className='mx-4'><b>PublicationDate:</b> {product?.publicationDate}</span></p>
        </Card.Text>
        <button  onClick={() => handleAddProduct(product)} 
        style={{padding: '0.5em', background: '#3a7693', color: '#fff'}}
        className='mx-5'
        > 
        Add to cart 
        </button>
        <Link 
        to={`/product-details/${product._id}`}
        style={{padding: '0.5em', background: '#d1411d', color: '#fff', textDecoration: 'none'}}
        >
          Details
        </Link> 
      </Card.Body>
    </Card>
  </div>  );
}


    // <Table>
      {/* <TableHeader> */}
        {/* <TableRow> */}
          {/* <TableHead>Author</TableHead> */}
          {/* <TableHead>Title</TableHead> */}
          {/* <TableHead>Genre</TableHead> */}
          {/* <TableHead>PublicationDate</TableHead> */}
          {/* <TableHead>Cart</TableHead> */}
          {/* <TableHead>Details</TableHead> */}
        {/* </TableRow> */}
      {/* </TableHeader> */}
      {/* <TableBody> */}
{/*          */}
          {/* <TableRow> */}
            {/* <TableCell className="font-medium"><h1 className="text-xl font-semibold">{product?.author}</h1> */}
            {/* </TableCell> */}
            {/* <TableCell>{product?.title}</TableCell> */}
            {/* <TableCell>{product?.genre}</TableCell> */}
            {/* <TableCell>{product?.publicationDate}</TableCell> */}
            {/* <TableCell className="text-right"> */}
               {/* <Button variant="default" onClick={() => handleAddProduct(product)} className=''> */}
               {/* Add to cart */}
              {/* </Button> */}
            {/* </TableCell> */}
            {/* <TableCell className="text-right"> */}
              {/* <Button> <Link to={`/product-details/${product._id}`} >Details</Link></Button> */}
            {/* </TableCell> */}
          {/* </TableRow> */}
      {/* </TableBody> */}
    {/* </Table> */}
