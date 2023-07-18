import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { DropdownMenuSeparator } from '../components/ui/dropdown-menu';
import { DropdownMenuLabel } from '../components/ui/dropdown-menu';
import avater from '../assets/images/avatar.png';
import {
  DropdownMenuItem,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from '../components/ui/dropdown-menu';
import { HiOutlineSearch } from 'react-icons/hi';
import { useAppDispatch, useAppSelector } from '../redux/hook';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { setUser } from '../redux/features/user/userSlice';

export default function Navbar() {
    //logout
  const {user} = useAppSelector((state) => state.user);
const dispatch = useAppDispatch();
  const handleLogout = () =>{
    console.log('LogOut')
    signOut(auth).then(() => {
dispatch(setUser(null));
    })

  }
  return (
    <nav className="fixed z-10 w-full h-16 top backdrop-blur-lg">
      <div className="w-full h-full bg-white/60">
        <div className="flex items-center justify-between w-full h-full mx-auto md:max-w-7xl ">
          <div>
            <img className="w-40 h-30" src={logo} alt="Logo" />          
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
                <Button variant="ghost">
                  <HiOutlineSearch size="25" />
                </Button>
              </li>
              <li className="ml-5">
                <DropdownMenu>
                  <DropdownMenuTrigger className="outline-none">
                    <Avatar>
                      <AvatarImage src={avater} />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    
                    <DropdownMenuLabel>Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                   {!user.email && (
                     <>
                     <Link to="/login">
                       <DropdownMenuItem className="cursor-pointer">
                         Sign in
                       </DropdownMenuItem>
                     </Link>
                     <Link to="/signup">
                       <DropdownMenuItem className="cursor-pointer">
                         Sign up
                       </DropdownMenuItem>
                     </Link>
                     </>
                      )}
                      {
                      user.email && (

                      <DropdownMenuItem 
                      className="cursor-pointer"
                      onClick={handleLogout}
                      >
                        Logout
                      </DropdownMenuItem>
                      )}
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
