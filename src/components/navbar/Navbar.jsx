import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import * as Scroll from 'react-scroll'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { CgGym } from 'react-icons/cg'
import shortid from 'shortid'
import data from '../../constants/data'

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  const handleClick = () => setClick(!click);
  const path = useLocation().pathname;
  const location = path.split('/')[1];
  const navigate = useNavigate();
  const scroller = Scroll.scroller;

  const scrollToAnchor = (anchor) => {
    scroller.scrollTo(anchor, {
      duration: 500,
      smooth: true,
      exact: true
    });
  };

  const goToHomeAndScrollToAnchor = async (anchor) => {
    //scroll to anchor is not working !!
    navigate('/home');
    //scrollToAnchor(anchor);
  };

  const handleScroll = (anchor) => {
    setClick(false);
    if (location === 'home') {
      scrollToAnchor(anchor);
    }
    else {
      goToHomeAndScrollToAnchor(anchor);
    }
  }

  const content =
    <>
      <div className='lg:hidden block absolute top-16 w-full
      z-50 left-0 right-0 bg-teal-900 transition'>
        <ul className='text-center text-xl p-20'>
          {data.navlinks.map((navlink) => (
            <Link
              spy={true}
              smooth={true}
              to={navlink.link_to}
              key={shortid.generate()}>
              <li className='my-4 py-4 border-b border-teal-800 
            hover:bg-teal-500 hover:rounded cursor-pointer'
                onClick={() => handleScroll(`${navlink.link_to}`)}>
                {navlink.link_title}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </>

  useEffect(() => {
    function captureWindowWidth() {
      setWindowWidth(window.innerWidth)
      console.log(window.innerHeight, window.innerWidth)
    }
    // Trigger this function on resize
    window.addEventListener('resize', captureWindowWidth)
    //  Cleanup for componentWillUnmount
    return () => window.removeEventListener('resize', captureWindowWidth)
  }, [])

  return (
    <nav className='sticky top-0 z-50 bg-gradient-to-r
     from-teal-800 to-teal-400'>
      <div className='h-10vh flex justify-between 
      text-white lg:py-5 px-20 py-4 border-teal-800'>
        <div className='flex items-center flex-1'>
          <CgGym size={40} color="white" />
          <span className='text-3xl font-bold ml-8 text-white'>
            {(windowWidth > 900) ? `${data.contactUs.name_long} `: `${data.contactUs.name_short}`}
          </span>
        </div>
        <div className='lg:flex md:flex lg: flex-1 items center 
        justify-end font-normal hidden'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
              {data.navlinks.map((navlink) => (
                <Link
                  spy={true}
                  smooth={true}
                  to={navlink.link_to}
                  key={shortid.generate()}
                  onClick={() => handleScroll(`${navlink.link_to}`)}>
                  <li className='hover:text-black transition hover:border-b-2 
                border-teal-900 hover:border-teal-600 cursor-pointer'>
                    {navlink.link_title}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block md:hidden transition' onClick={handleClick}>
          {click ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar