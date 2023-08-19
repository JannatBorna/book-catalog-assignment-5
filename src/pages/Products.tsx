import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { useToast } from '../components/ui/use-toast';
import Footer from '../layouts/Footer';
import { useGetProductsQuery } from '../redux/features/products/productApi';
import { useAppSelector } from '../redux/hook';
// import { useAppSelector } from '../hook/useAuth';
import { IProduct } from '../types/globalTypes';
import { Container} from 'react-bootstrap';
import './Products.css';

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
    <h2 className='my-5 text-center'>ALL BOOKS</h2>
    <Container>
      <div className='book-card'>
          <div className="books">
                { productsData?.map((product: IProduct) => (
                <ProductCard product={product} />
                ))
                }
          </div>


          
        <div className='p-3'>
          <div className='border-l border-[#dadada]'>
            <div className="py-5 space-y-1">
              <div className="flex items-center px-5">
                <Link to="/addNew"
                style={{padding: '0.5em',background: '#2472de',  color: '#fff', textDecoration: 'none'}}
                className='px-3 py-2 border rounded-md shadow-inner shadow-gray-300 focus:outline-none focus:ring-1'
                >Add New Book
                </Link>
              </div>
            </div>
               

            {/* Filter */}
            <div className="col-span-3 mb-8 bg-white border-t shadow-book-details-card md:mb-0">
              {/* search Filtering */}
              <div>
                {/* Search bar */}
                <div className="border-b border-[#dadada]">
                  <div className=" border-[#dadada] py-3">
                    <h4 className="text-lg   font-semibold text-[#333] px-5 capitalize">
                      Search
                    </h4>
                  </div>
                  <div className="pb-5 space-y-1">
                    <div className="flex items-center px-5">
                      <input
                        type="text"
                        name="searchTerm"
                        // onChange={(e) => handleFilter(e)}
                        placeholder="Search"
                        className="w-full px-3 py-2 border border-black rounded-md shadow-inner shadow-gray-300 focus:outline-none focus:ring-1"
                      />
                    </div>
                  </div>
                </div>
                {/* Genre Filtering */}
                <div className="border-b border-[#dadada]">
                  <div className="border-[#dadada] py-3">
                    <h4 className="text-lg font-semibold text-[#333] px-5 capitalize">
                      Genre
                    </h4>
                  </div>
                  <div className="pb-5 space-y-1">
                    <div className="flex items-center px-5">
                      <input
                        type="text"
                        name="genre"
                        // onChange={(e) => handleFilter(e)}
                        placeholder="Search by Genre"
                        className="w-full px-3 py-2 border border-black rounded-md shadow-inner shadow-gray-300 focus:outline-none focus:ring-1 "
                      />
                    </div>
                  </div>
                </div>
                <div className=" border-[#dadada] py-3">
                  <h4 className="text-lg font-semibold text-[#333] px-5 capitalize">
                    publication year
                  </h4>
                </div>
                <div className="space-y-1">
                  <div className="flex items-center px-5">
                    <input
                      type="text"
                      name="publicationDate"
                      // onChange={(e) => handleFilter(e)}
                      placeholder="Search buy Publication Year"
                      className="w-full px-3 py-2 border border-black rounded-md shadow-inner shadow-gray-300 focus:outline-none focus:ring-1 "
                    />
                  </div>
                </div>
              </div>
              </div>           
            </div>
          </div>
      </div>
    </Container>
    <Footer />
    </div>
  );
}
