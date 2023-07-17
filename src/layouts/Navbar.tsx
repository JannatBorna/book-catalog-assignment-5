import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { DropdownMenuSeparator } from '../components/ui/dropdown-menu';
import { DropdownMenuLabel } from '../components/ui/dropdown-menu';
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '../components/ui/dropdown-menu';
import { HiOutlineSearch } from 'react-icons/hi';
import Cart from '../components/Cart';
// import logo from '../assets/images/technet-logo.png';

export default function Navbar() {
  return (
    <nav className="fixed z-10 w-full h-16 top backdrop-blur-lg">
      <div className="w-full h-full bg-white/60">
        <div className="flex items-center justify-between w-full h-full mx-auto md:max-w-7xl ">
          <div>
            {/* <img className="h-8" src={logo} alt="log" /> */}
            <h2 className='p-1 text-red-300 border-b-4 border-indigo-500'>BOOK CATALOG</h2>
          </div>
          <div>
            <ul className="flex items-center">
              <li>
                <Button variant="link" asChild>
                  <Link to="/">Home</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/products">All Books</Link>
                </Button>
              </li>
              <li>
                <Button variant="link" asChild>
                  <Link to="/checkout">Checkout</Link>
                </Button>
              </li>
              <li>
                <Button variant="ghost">
                  <HiOutlineSearch size="25" />
                </Button>
              </li>
              <li>
                <Cart />
              </li>
              <li className="ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                     <Link to="/signup">
                       <DropdownMenuItem className="cursor-pointer">
                         Sign in
                       </DropdownMenuItem>
                     </Link>
                     <Link to="/signup">
                       <DropdownMenuItem className="cursor-pointer">
                         Sign up
                       </DropdownMenuItem>
                     </Link>
                  </DropdownMenuContent>
                </DropdownMenu>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
