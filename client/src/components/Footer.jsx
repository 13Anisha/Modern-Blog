import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsInstagram, BsTwitter, BsGithub} from 'react-icons/bs';
import { AiFillBulb } from 'react-icons/ai';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-gray-500'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1 '>
          <div className='mt-5 flex'>
            <Link
              to='/'
              className='self-center whitespace-nowrap lg:text-4xl sm:text-2xl font-semibold dark:text-white flex'
            >
            <AiFillBulb className='mr-1' />
            BlogBuzz
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6 '>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://medium.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  More about us
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  BlogBuzz
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://github.com/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='#'>Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="BlogBuzz"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href='https://www.facebook.com/' icon={BsFacebook}/>
            <Footer.Icon href='https://www.instagram.com/' icon={BsInstagram}/>
            <Footer.Icon href='https://twitter.com/?lang=en' icon={BsTwitter}/>
            <Footer.Icon href='https://github.com/' icon={BsGithub}/>
            

          </div>
        </div>
      </div>
    </Footer>
  );
}