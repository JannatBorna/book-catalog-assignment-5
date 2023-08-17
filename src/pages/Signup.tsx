// import { cn } from '../lib/utils';
// import { buttonVariants } from '../components/ui/button';
import { SignupForm } from '../components/SignUpForm';
import { Link } from 'react-router-dom';
// import signin from '../assets/images/sign.jpg';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

export default function Signup() {
  return (
    <>
    <Navbar />
      <div className="container relative flex-col items-center justify-center h-screen md:grid lg:max-w-none">
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>
            <SignupForm />
            <p className='text-center'>All Ready Have Account?  <Link to="/login">LOGIN</Link> Now</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
