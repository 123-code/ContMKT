import dynamic from 'next/dynamic'

const DynamicTokenize = dynamic(() => import('./Tokenize'), {
    ssr: false
  })
  
  export default DynamicTokenize