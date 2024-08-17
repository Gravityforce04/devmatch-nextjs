// pages/_app.js
import { ThirdwebProvider, ChainId } from "@thirdweb-dev/react";
import "../styles/globals.css"; // Import global styles

function MyApp({ Component, pageProps }) {
  const activeChain = "Sroll Sepolia Testnet"; // Set the chain ID you're using
  return (
    <ThirdwebProvider desiredChain={activeChain}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
