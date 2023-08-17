import { Link } from 'react-router-dom';
import { LoginForm } from '../components/LoginForm';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

export default function Login() {
  return (
    <>
    <Navbar />
      <div className="container relative flex-col items-center justify-center h-screen md:grid lg:max-w-none">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Login to your account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below
              </p>
            </div>
            <LoginForm />
            <p className='text-center'>New User?  <Link to="/signup">SIGN UP</Link> Now</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
