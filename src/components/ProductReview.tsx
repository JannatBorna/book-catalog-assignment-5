import { ChangeEvent, FormEvent, useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import avater from '../assets/images/avatar.png';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { useGetCommentQuery, 
  usePostCommentMutation,
 } from '../redux/features/products/productApi';



interface IProps {
  id: string;
}

export default function ProductReview({ id }: IProps) {
  const [inputValue, setInputValue] = useState<string>('');
  
// post comment
const [postComment, {isLoading, isError, isSuccess}] = usePostCommentMutation();
console.log(isLoading);
console.log(isError);
console.log(isSuccess);

// comment web show korar jonno
const {data} = useGetCommentQuery(id,{
  refetchOnMountOrArgChange: true, // refetchOnMountOrArgChange: true - mane onno user comment korle show korba
  pollingInterval:30000}); // pollingInterval:30000 - holo proti 30 sec por por new comments show korbe
console.log(data)
const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  //  console.log(inputValue);



const options = {
  id: id,
  data: {comment:inputValue},
}
postComment(options)


    setInputValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="mx-auto mt-5 max-w-7xl">
      <form className="flex items-center gap-5" onSubmit={handleSubmit}>
        <Textarea
          className="min-h-[30px] w-80"
          onChange={handleChange}
          value={inputValue}
        />
        <Button
          type="submit"
          className=""
        >
          Review
        </Button>
      </form>
      <div className="mt-10">
        {data?.comments?.map((comment: string, index: number) => (
          <div key={index} className="flex items-center gap-3 mb-5">
             <Avatar>
                <AvatarImage src={avater} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            <p>{comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}