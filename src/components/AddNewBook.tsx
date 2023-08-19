import { useForm } from "react-hook-form";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { useAddNewBookMutation } from "../redux/features/products/productApi";
import { useNavigate } from "react-router-dom";
import { IBook } from "../interfaces/book.interfaces";
import { toast } from "react-hot-toast";
import { useAppSelector } from "../redux/hook";


const CreateNews = () => {
const [addNewBook] = useAddNewBookMutation();
const navigate = useNavigate();
const {user} = useAppSelector((state) => state.user || {} );

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm<IBook>();
const onSubmit = (data: IBook) => {
  const book = {
    title: data.title,
    author: data.author,
    genre: data.genre,
    image: data?.image,
    publicationDate: data.publicationDate,
    email: user?.email,
    // name: user?.fullName,
    // userId: user?._id,
  };

  addNewBook(book);
  toast.success("Successfully added new Book");
  navigate("/products");
  console.log(addNewBook)

  
};


return (
    <>
    <Navbar />
      <div>
      <section className="py-3 bg-gray-100 ">
        <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto mt-3">
            <div className="overflow-hidden bg-white rounded-xl">
              <div className="px-6 sm:p-10">
                <h3 className="text-3xl font-semibold text-center text-gray-900">
                  Add new Book
                </h3>

                <form onSubmit={handleSubmit(onSubmit)} className="mt-5">
                  <div className="grid items-center justify-center grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Book Title
                        <span className="ml-2 text-sm font-semibold text-red-800">
                          {errors?.title?.message}
                        </span>
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          {...register("title", {
                            required: "Email is required",
                          })}
                          name="title"
                          id="title"
                          placeholder="Enter your Book Title..."
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md shadow-inner shadow-gray-400 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor=""
                        className="text-base font-medium text-gray-900"
                      >
                        Author
                        <span className="ml-2 text-sm font-semibold text-red-800">
                          {errors?.author?.message}
                        </span>
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          {...register("author", {
                            required: "Author is required",
                          })}
                          name="author"
                          id="author"
                          placeholder="Author ..."
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md shadow-inner shadow-gray-400 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="Genre"
                        className="text-base font-medium text-gray-900"
                      >
                        Genre
                        <span className="ml-2 text-sm font-semibold text-red-800">
                          {errors?.genre?.message}
                        </span>
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="text"
                          {...register("genre", {
                            required: "Genre is required",
                          })}
                          name="genre"
                          id="genre"
                          placeholder="Enter your Book Genre..."
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md shadow-inner shadow-gray-400 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="publicationDate"
                        className="text-base font-medium text-gray-900"
                      >
                        Publication Date
                        <span className="ml-2 text-sm font-semibold text-red-800">
                          {errors?.publicationDate?.message}
                        </span>
                      </label>
                      <div className="mt-2.5 relative">
                        <input
                          type="date"
                          {...register("publicationDate", {
                            required: "publication Year is required",
                          })}
                          name="publicationDate"
                          id="publicationDate"
                          placeholder="Enter your Book Publication Year..."
                          className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md shadow-inner shadow-gray-400 caret-blue-600"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        className="inline-flex items-center justify-center w-full px-4 py-4 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                      >
                        Add new Book
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
    );
};

export default CreateNews;

    // <div className="container relative flex-col items-center justify-center h-screen md:grid lg:max-w-none">
    {/* <form */}
    // className="from"
    // onSubmit={handleSubmit(onSubmit)}
    // name="from_item_path"
    // style={{
    // width: "50%",
    // margin: "50px auto",
    // }}
    // >
      {/* <input  */}
      // {...register("title")} 
      // placeholder="Title" 
      // style={{marginBottom: "10px", padding: "0.4em", width: "100%", border: '1px solid black'}}
      // />
      {/* <input  */}
      // {...register("author")} 
      // placeholder="Author" 
      // style={{marginBottom: "10px", padding: "0.4em",  width: "100%", border: '1px solid black'}} 
      // />
      {/* <input  */}
      // {...register("genre")} 
      // placeholder="Genre" 
      // style={{marginBottom: "10px", padding: "0.4em",  width: "100%", border: '1px solid black'}} 
      // />
      {/* <input  */}
      // {...register("publicationDate")} 
      // placeholder="publication Date" 
      // type="date"
      // style={{marginBottom: "10px 0px", padding: "0.4em",  width: "100%", border: '1px solid black'}} 
      // />
{/*      */}
      {/* <input  */}
      // type="submit" 
      // value="Add new Book" 
      // style={{margin: "10px 0px", width: "100%",  border: '1px solid black'}}
      // />
    {/* </form> */}
    {/* </div> */}