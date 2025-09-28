// Adicione no início do arquivo:
import { useNetworkVariable } from '@mysten/dapp-kit';

// Atualize a função fetchObjects:
const fetchObjects = async () => {
  if (!account?.address) return;
  
  setLoading(true);
  setError(null);
  
  try {
    const data = await client.getOwnedObjects({ 
      owner: account.address,
      options: { 
        showDisplay: true,
        showType: true,
        showContent: true // Novo parâmetro para mais detalhes
      }
    });
    setObjects(data.data || []);
  } catch (err) {
    setError(err.message);
    console.error("Erro na busca:", err);
    // Adicione tratamento de erro mais robusto aqui
  } finally {
    setLoading(false);
  }
};