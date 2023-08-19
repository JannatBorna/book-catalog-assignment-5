import logo from '../assets/images/logo.png';
import { Link } from 'react-router-dom';
// import { useAppDispatch, useAppSelector } from '../hook/useAuth';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { setUser } from '../redux/features/user/userSlice';
import { useAppDispatch, useAppSelector } from '../redux/hook';

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
                  <Link to="/"
                   style={{padding: '0.5em', textDecoration: 'none', color: 'black', backgroundColor: '#e4e3e2'}}
                  >Home</Link>
              </li>
              <li>
                  <Link to="/products"
                   style={{padding: '0.5em', textDecoration: 'none', color: 'black', backgroundColor: '#e4e3e2'}}
                   className='mx-5'
                  >All Books</Link>
              </li>
              <li>
              </li>
              <li className="ml-5">
                   {!user.email && (
                     <>
                     <Link to="/login"
                      style={{padding: '0.5em', textDecoration: 'none', color: 'black', backgroundColor: '#e4e3e2'}}
                     >
                         Sign in
                     </Link>
                     </>
                      )}
                      {
                      user.email && (

                      <button
                      className="cursor-pointer"
                      style={{padding: '0.4em', background: '#e94518', color: '#fff'}}
                      onClick={handleLogout}
                      >
                        Logout
                      </button>
                      )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
