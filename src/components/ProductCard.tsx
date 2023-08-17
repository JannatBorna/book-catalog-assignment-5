import { IProduct } from '../types/globalTypes';
import { toast } from './ui/use-toast';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../redux/hook';
import { addToCart } from '../redux/features/cart/cartSlice';
import Card from 'react-bootstrap/Card';


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
        style={{padding: '0.5em', background: '#e6ca2a', color: '#000', textDecoration: 'none'}}
        >
          Details
        </Link> 
      </Card.Body>
    </Card>
  </div>  );
}