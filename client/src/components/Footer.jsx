import { Footer} from 'flowbite-react';
import {Link} from 'react-router-dom';
import {BsFacebook, BsGithub, BsInstagram, BsPinterest, BsTwitter} from 'react-icons/bs'
import React from 'react';


export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-gray-500'>
        <div className='w-full max-w-7xl max-auto'>
            <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
                <div className='mt-5'>
                <Link to="/" className='self-center whitespace-nowrap text-4xl sm:text-2xl font-semibold dark:text-white' >            
                    BlogBuzz
                </Link>
                
                </div>
                <div className='grid grid-cols-2 gap-8 mt-5 sm:grid-cols-3 sm:gap-6 mt-4'>
                    <div>
                        <Footer.Title title='About' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href="https://medium.com/"
                                target='_blank'
                                rel='noopener noreferrer'>
                                    Learn more
                            </Footer.Link>


                            <Footer.Link
                                href="/about"
                                rel='noopener noreferrer'>
                                    BlogBuzz
                            </Footer.Link>

                            



                        </Footer.LinkGroup>


                    </div>



                    <div>
                        <Footer.Title title='Follow Us' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href="https://github.com/"
                                target='_blank'
                                rel='noopener noreferrer'>
                                    GitHub
                            </Footer.Link>


                            <Footer.Link
                                href="https://www.instagram.com/"
                                target='_blank'
                                rel='noopener noreferrer'>
                                    Instagram
                            </Footer.Link>


                            <Footer.Link
                                href="https://www.facebook.com/"
                                target='_blank'
                                rel='noopener noreferrer'>
                                    Facebook
                            </Footer.Link>



                            



                        </Footer.LinkGroup>


                    </div>


                    <div>
                        <Footer.Title title='Legal' />
                        <Footer.LinkGroup col>
                            <Footer.Link
                                href="#">
                                    Privacy Policy 
                                
                            </Footer.Link>


                            <Footer.Link
                                href="3"
                                >
                                    Terms &amp; Conditions
                                   
                            </Footer.Link>


                            <Footer.Link
                                href="#">
                                  Help
                            </Footer.Link>



                            



                        </Footer.LinkGroup>


                    </div>                   
                    


                </div>

            </div>

            <Footer.Divider />
            <div className='w-full sm:flex sm:items-center sm:justify-between'>
                <Footer.Copyright  href='/' by="Blogbuzz.com" year={new Date().getFullYear()}/>
                <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
                    <Footer.Icon href='https://www.facebook.com/' icon={BsFacebook}/>
                    <Footer.Icon href='https://www.instagram.com/' icon={BsInstagram}/>
                    <Footer.Icon href='https://github.com/' icon={BsGithub}/>
                    <Footer.Icon href='https://in.pinterest.com/' icon={BsPinterest}/>
                    <Footer.Icon href='https://twitter.com/?lang=en' icon={BsTwitter}/>
                </div>

            </div>


        </div>
    </Footer>
  )
}
