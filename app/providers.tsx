"use client";
import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import {store} from '@/components/store/index'
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from 'react-query'
import{ Auth} from '@/components/auth/Auth'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Providers = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            staleTime: 1000 * 60 * 5,
            cacheTime: 1000 * 10
          }
        }
      })
    return (
        <Provider store={store()}>
          <Auth>
          <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
             <QueryClientProvider client={queryClient}>
            <CacheProvider>
                <ColorModeScript
                    initialColorMode="system"
                    key="chakra-ui-no-flash"
                    storageKey="chakra-ui-color-mode"
                />
                <ChakraProvider>{children}</ChakraProvider>
            </CacheProvider>
            </QueryClientProvider>
            <ToastContainer />
            </Auth>
        </Provider>
    );
}

export default Providers
