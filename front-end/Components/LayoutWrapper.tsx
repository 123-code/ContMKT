import siteMetadata from '@/data/siteMetadata'

//import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const  headerNavLinks =[
    { href: '/blog', title: 'Blog' },
    { href: '/tags', title: 'Tags' },
    { href: '/projects', title: 'Projects' },
    { href: '/about', title: 'About' },

]

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-10">
          <div>
          
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                // eslint-disable-next-line react/jsx-key
                <li >
                    {link.title}
                </li>
                ))}
            </div>
         
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper