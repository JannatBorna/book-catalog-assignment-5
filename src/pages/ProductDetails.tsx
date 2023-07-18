import ProductReview from '../components/ProductReview';
import { useParams } from 'react-router-dom';
import { useSingleProductQuery } from '../redux/features/products/productApi';
import Delate from '../components/Delate';
import Edit from '../components/Edit';



export default function ProductDetails() {


  const { id } = useParams();
  console.log(id);
  const { data: product, isLoading, error } = useSingleProductQuery(id);
console.log(isLoading);
console.log(error);

  return (
    <>
      <div className="flex items-center mx-auto border-b border-gray-300 max-w-7xl">
        <div className="w-[50%]">
          <img src={product?.img} alt="" className='w-9/12 h-96 '/>
        </div>
        <div className="w-[50%] space-y-3">
          <h1 className="text-3xl font-semibold">Book Author:{product?.author}</h1>
          <h6><b>Title:</b>{product?.title}</h6>
          <p><b>Genre</b>: {product?.genre}</p>
          <p><b>Publication Date:</b> {product?.publicationDate}</p>
          <ul className="space-y-1 text-lg">
            {product?.features?.map((feature: string) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <Edit />
          <Delate />
        </div>
      </div>

      <ProductReview id={id!}/>    {/* comments id */}
    </>
  );
}
