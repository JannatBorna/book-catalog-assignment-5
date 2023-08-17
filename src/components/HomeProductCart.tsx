import { IProduct } from '../types/globalTypes';
// import { toast } from './ui/use-toast';
import { Link } from 'react-router-dom';
// import { useAppDispatch } from '../redux/hook';
// import { addToCart } from '../redux/features/cart/cartSlice';
import Card from 'react-bootstrap/Card';



interface IProps {
  product: IProduct;
}

export default function HomeProductCard({ product }: IProps) {

// const dispatch = useAppDispatch()


  // const handleAddProduct = (product: IProduct) => {
    // console.log(product);
    //dispatch
    // dispatch(addToCart(product)); 

    // toast({
    //   description: 'Product Added',
    // });
  // };
  return (
  <div className='my-3'>
      <Card style={{ width: '26rem' }}>
      <Card.Body>
        <Card.Title>
          <h4>Title: {product?.title}</h4>
        </Card.Title>
        <Card.Text><b>Author:</b> {product?.author}</Card.Text>
        <Card.Text>
        <p style={{ display:"flex", justifyContent:"space-between", width:"100%", color:"gray", margin:"10px 0px" }} >
          <span><b>Genre:</b> {product?.genre}</span>
          <span className='mx-4'><b>Publication Date:</b> {product?.publicationDate}</span></p>
        </Card.Text>
        {/* <button  onClick={() => handleAddProduct(product)}  */}
        <Link to="/addNew"
        style={{padding: '0.5em', background: '#3a7693', color: '#fff', textDecoration: 'none'}}
        className='mx-5'
        > 
        Add New Book
        </Link>
        <Link 
        to={`/product-details/${product._id}`}
        style={{padding: '0.5em', background: '#e6ca2a', color: '#000', textDecoration: 'none'}}
        >
          Details
        </Link> 
      </Card.Body>
    </Card>
  </div>
  );
}
