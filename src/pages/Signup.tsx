import { cn } from '../lib/utils';
import { buttonVariants } from '../components/ui/button';
import { SignupForm } from '../components/SignUpForm';
import { Link } from 'react-router-dom';
import signin from '../assets/images/sign.jpg';
import Navbar from '../layouts/Navbar';

export default function Signup() {
  return (
    <>
    <Navbar />
      <div className="container relative flex-col items-center justify-center hidden h-screen md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link
          to="/login"
          className={cn(
            buttonVariants({ variant: 'ghost', size: 'sm' }),
            'absolute right-4  md:right-8 md:top-20'
          )}
        >
          Login
        </Link>
        <div className="relative flex-col hidden h-full p-10 text-white bg-muted dark:border-r lg:flex">
           <img  className="absolute inset-0 bg-cover" src={signin} alt="" />
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2"></blockquote>
          </div>
        </div>
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
            <p className="px-8 text-sm text-center text-muted-foreground">
              By clicking continue, you agree to our{' '}
              <Link
                to="/terms"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </Link>
              and
              <Link
                to="/privacy"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
