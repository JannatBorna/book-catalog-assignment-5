import {
  Sheet,
  SheetTrigger,
} from './ui/sheet';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

export default function Edit() {
  


  return (
    <Sheet>
      <SheetTrigger>
        <Button>
        <Link to="/checkout"> Edit</Link>
        </Button>
      </SheetTrigger>
    </Sheet>
  );
}
