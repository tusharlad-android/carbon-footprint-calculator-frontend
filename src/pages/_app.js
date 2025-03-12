import { CarbonContextProvider } from '@/context/CarbonContext';
import '../styles/global.css'


export default function App({ Component, pageProps }) {
  return (
    <CarbonContextProvider>
      <Component {...pageProps} />
    </CarbonContextProvider>)
}
