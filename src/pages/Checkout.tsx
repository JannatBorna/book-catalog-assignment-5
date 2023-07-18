

import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Table, TableBody,TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import {  useAppSelector } from '../redux/hook';


export default function Checkout() {
   const {products } = useAppSelector((state) => state.cart);


  return (
    <div className="flex items-center justify-center gap-10 text-primary">
      <div className="w-full max-w-3xl">
        <h1 className="mb-2">Delivery Information</h1>
      {products.map((product) => (
<Table>
  <TableHeader>
    <TableRow>
       <TableHead className="w-[100px]">No</TableHead>
      <TableHead>autho</TableHead>
      <TableHead>title</TableHead>
      <TableHead>genre</TableHead>
      <TableHead className="text-right">Publication Date</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">{product.no}</TableCell>
      <TableCell>{product.author}</TableCell>
      <TableCell>{product.title}</TableCell>
      <TableCell>{product.genre}</TableCell>
      <TableCell className="text-right">{product.publicationDate}</TableCell>
    </TableRow>
  </TableBody>
        <Button>
        <Link to="/products"> Edit Done</Link>
      </Button>
</Table>
         ))}
      </div>
    </div>
  );
}
