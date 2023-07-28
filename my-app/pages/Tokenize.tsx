import React, { useEffect, useState } from 'react'
import {
  Address,
  Hash,
  TransactionReceipt,
  createPublicClient,
  createWalletClient,
  custom,
  http,
  stringify,
} from 'viem'
import { goerli } from 'viem/chains'
import 'viem/window'
import {ERC721Address,ERC721ABI} from '../ABIs/ERC721'

const publicClient = createPublicClient({
  chain: goerli,
  transport: http(),
})
const walletClient = createWalletClient({
  chain: goerli,
  transport: custom(window.ethereum!),
})

export default function Tokenize() {

  const [account, setAccount] = useState<Address>()
  const [hash, setHash] = useState<Hash>()
  const [receipt, setReceipt] = useState<TransactionReceipt>()



    const connect = async () => {
    const [address] = await walletClient.requestAddresses()
    setAccount(address)
  }

//address _to,string memory TokenURI
  const mint = async () => {
    if(!account){
       <button>Connect</button>
    }
      
    const result = await publicClient.simulateContract({
      functionName: 'mint',
      account,
      abi: ERC721ABI,
      address: ERC721Address,
      args: [account,'www.google.com'] 
    })
    const { request } = result 
    const hash = await walletClient.writeContract(request)
    setHash(hash)
    }

// provides transaction details 
    useEffect(() => {
      ;(async () => {
        if (hash) {
          const receipt = await publicClient.waitForTransactionReceipt({ hash })
          setReceipt(receipt)
        }
      })()
    }, [hash, publicClient])


    return(
      <>
      {account && <button onClick={mint}>Mint</button>}
      </>
    )
  
  }

 
  