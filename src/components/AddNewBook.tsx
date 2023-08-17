import { useForm } from "react-hook-form";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";



const CreateNews = () => {

// enum GenderEnum {
//   title = "title",
//   male = "male",
//   other = "other",
// }

interface IFormInput {
  title: string
  author: string
  genre: string
  publicationDate: number
}
     const { register, handleSubmit } = useForm<IFormInput>();
     
     const onSubmit = (data: any) => {
       fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(data),
    })

    .then((res) => res.json())
    .then((data) => {
        if(data.insertedId){
            alert("New book add Successfully!");
        }
    });
};

return (
    <>
    <Navbar />
    <div className="container relative flex-col items-center justify-center h-screen md:grid lg:max-w-none">
    <form
    className="from"
    onSubmit={handleSubmit(onSubmit)}
    name="from_item_path"
    style={{
    width: "50%",
    margin: "50px auto",
    }}
    >
      <input 
      {...register("title")} 
      placeholder="Title" 
      style={{marginBottom: "10px", padding: "0.4em", width: "100%", border: '1px solid black'}}
      />
      <input 
      {...register("author")} 
      placeholder="Author" 
      style={{marginBottom: "10px", padding: "0.4em",  width: "100%", border: '1px solid black'}} 
      />
      <input 
      {...register("genre")} 
      placeholder="Genre" 
      style={{marginBottom: "10px", padding: "0.4em",  width: "100%", border: '1px solid black'}} 
      />
      <input 
      {...register("publicationDate")} 
      placeholder="publication Date" 
      type="date"
      style={{marginBottom: "10px 0px", padding: "0.4em",  width: "100%", border: '1px solid black'}} 
      />
    
      <input 
      type="submit" 
      value="Add new Book" 
      style={{margin: "10px 0px", width: "100%",  border: '1px solid black'}}
      />
    </form>
    </div>
    <Footer />
    </>
    );
};

export default CreateNews;