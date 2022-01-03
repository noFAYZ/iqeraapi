import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { useRouter } from 'next/router';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (<>
  {router.pathname != '/dashboard' ? <Navbar /> : ''}
    
  <Component {...pageProps} />
  </>
  )}

export default MyApp
