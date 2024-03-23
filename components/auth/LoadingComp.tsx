'use client';
import { useEffect } from 'react';
import { useRouter } from "next/navigation";// Corrected import
import { useSelector } from 'react-redux';

// Correct representation of your Redux state shape
interface RootState {
  authReducer: {
    token: string | null;
  };
}

const LoadingComp = () => {
  const router = useRouter();
  // Directly access the token from the Redux state
  const token = useSelector((state: RootState) => state.authReducer.token);

  useEffect(() => {
    // Directly handle redirection inside useEffect
    const handleRedirection = () => {
      const destinationPath = token ? '/dashboard' : '/login';
      // Ensure we're not already at the destination before pushing to avoid unnecessary navigation
      if (destinationPath) {
        router.push(destinationPath);
      }
    };

    // Call handleRedirection after a 2-second delay to show the loader
    const timer = setTimeout(handleRedirection, 2000);

    // Cleanup the timer if the component unmounts
    return () => clearTimeout(timer);
  }, [token, router]); // Include router in the dependency array as a best practice

  // Render the Loader while handling redirection
  return (
    <div className="flex w-full bg-white absolute justify-center items-center h-screen">
      <div className="w-fit">
        <img alt="Loading..." src={"/images/logo.png"} className="h-[200px] animate-pulse" />
      </div>
    </div>
  );
};

export default LoadingComp;