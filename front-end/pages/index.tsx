import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
//import { getAllFilesFrontMatter } from '@/lib/mdx'
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { readContracts } from '@wagmi/core'
import { MyTokenABI,MyTokenGoerliAddress } from '../ABIs/MyTokenABI'


const MAX_DISPLAY = 5



export default function Home({  }) {

  const GetMyTokenBalance = async()=>{

    const MyTokencontract = {
      address:MyTokenGoerliAddress,
      abi:MyTokenABI
    }

    const data = await readContracts({
      contracts:[
        {
          ...MyTokencontract,
          functionName: 'balanceOf',
        },
      ],
      
    })

  }
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <ConnectButton/>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
           CONT-MKT
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Tokenize Real World Assets
          </p>
        </div>
      </div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
      <li  className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on : </dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                      
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>

                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
                        

                          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400"> j </p>
                          <div className="flex flex-wrap">
                           
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                  
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        
                      </div>
                    </div>
                  </div>
                </article>
              </li>
      </ul>
       
    </>
  )
}