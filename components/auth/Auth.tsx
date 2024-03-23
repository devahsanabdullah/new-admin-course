import { useContext, useEffect, useState, ReactNode } from 'react';
import { useRouter } from "next/navigation"; // Corrected import for useRouter
import { useSelector } from 'react-redux';

// Type for the component props
interface AuthProps {
  children: ReactNode;
}

// Redux state type (example)
interface RootState {
  authReducer: {
    token: string | null;
  };
}

export const Auth = ({ children }: AuthProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // State to handle loading
  const token = useSelector((state: RootState) => state.authReducer.token); // Typing the Redux state

  useEffect(() => {
    // Perform authentication check
    if (!token) {
      router.push('/login')
    }
    setIsLoading(false); // Update loading state after check
  }, [router, token]); // Correct dependency array

  // Render loading indicator if loading
  if (isLoading) {
    return (
      <div className="flex w-full bg-white absolute justify-center items-center h-screen">
        <div className="w-fit">
          <img alt="logo1" src={"/images/logo.png"} className="h-[200px] animate-pulse" />
        </div>
      </div>
    );
  }

  // Render children if not loading and token is present
  return children;
};
