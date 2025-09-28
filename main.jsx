import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { 
  SuiClientProvider,
  WalletProvider,
  createNetworkConfig
} from '@mysten/dapp-kit';
import { getFullnodeUrl } from '@mysten/sui/client';
import './index.css';
import App from './App.jsx';

const { networkConfig } = createNetworkConfig({
  testnet: { url: getFullnodeUrl('testnet') },
  mainnet: { url: getFullnodeUrl('mainnet') },
  devnet: { url: getFullnodeUrl('devnet') }
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SuiClientProvider 
      networks={networkConfig}
      defaultNetwork="testnet"
    >
      <WalletProvider autoConnect>
        <App />
      </WalletProvider>
    </SuiClientProvider>
  </StrictMode>
);