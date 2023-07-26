import { useState, useEffect } from "react";
import { createWalletClient } from 'viem'
import { goerli } from 'viem/chains'
import { useAccount } from 'wagmi';
import { ethers } from "ethers";

import { ERC721ABI, ERC721Address } from "../ABIs/ERC721.ts";
import { Button } from "../Components/ConnectButton";

export default function TokenizePage() {

  const { address, isConnecting, isDisconnected, connector } = useAccount();

  const [signer, setSigner] = useState();
  const [contract, setContract] = useState();

  useEffect(() => {
    async function getSigner() {
      if(connector) {
        const signer = await connector.getSigner();
        setSigner(signer);

        const contract = new ethers.Contract(
          ERC721Address,
          ERC721ABI,
          signer  
        );
        setContract(contract);
      }
    }
    getSigner();
  }, [connector]);

  async function mintToken() {
    if(contract) {
      await contract.mint(address, 1); 
    }
  }

  return (
    <>
      <h1>Tokenize</h1>

      {isConnecting && <p>Connecting...</p>}

      {isDisconnected && <Button />}

      {address && <div>{address}</div>}

      {contract && <Button onClick={mintToken}>Mint Token</Button>}

    </>
  )
}