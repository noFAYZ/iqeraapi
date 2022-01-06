
import Hero1 from '../components/Hero1';
import Hero2 from '../components/Hero2';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';


export default function Home(ctx) {

  const router = useRouter();

  const jwt = parseCookies(ctx).token;
  if (jwt!=null) {
  router.push('/courses')
  }
  return (
    <div>
  

        <Hero1 />
        <Pricing />
        <Hero2 />
        <Footer />
    </div>
  )
}
