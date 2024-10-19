import { BsSearch } from "react-icons/bs";
import { HiMenuAlt3 } from "react-icons/hi";
import { ImPhone } from "react-icons/im";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import setLanguage from 'next-translate/setLanguage';

import { research_institutes } from '../data';

const openMenu = (e) => {
    console.log(e.target.nodeName);
    let elem = e.target.parentElement;
    let rotator = e.target;

    if(e.target.nodeName === "path"){
       elem = e.target.parentElement.parentElement;
       rotator = e.target.parentElement;
    }

    if(elem.nextSibling.style.maxHeight == "500px"){
        rotator.style.transform = "rotate(0deg)";
        return elem.nextSibling.style.maxHeight = "0px";
    }

    rotator.style.transform = "rotate(180deg)";
    elem.nextSibling.style.maxHeight = "500px";
}

const navlinks = [
    {
        heading: "Home",
        link: "/"
    },
    {
        heading: "About",
        image: "/static/img/navbar/about.png",
        link: "/about",
        opts: true,
        options: [
            {
                text: "Mission & Values",
                link: "/about/mission"
            },
            {
                text: "History",
                link: "/about/history"
            },
            {
                text: "Founder",
                link: "/about/founder"
            },
             {
                text: "Management Team",
                link: "/about/administrative-team"
            },
            {
                text: "Principal Officers(Nigeria)",
                link: "/about/principal-officers"
            },
            {
                text: "School Board",
                link: "/about/school-board"
            },
           {
                text: "Academic Team",
                link: "/about/academic-team"
            },
             {
                text: "ASE Benin Team",
                link: "/about/ase-benin"
            },
           {
                text: "ASE Nigeria Team",
                link: "/about/ase-nigeria"
            },
            {
                text: "Our Partners",
                link: "/about/our-partners"
            },
        ]
    },
    {
        heading: "Admission",
        image: "/static/img/navbar/about.png",
        link: "/admission",
        opts: true,
        options: [
            {
                text: "Programmes",
                link: "/admission/programmes"
            },
            {
                text: "Dual Degree Programmes",
                link: "/admission/dual-degree-programmes"
            },
            {
                text: "Financial Aid",
                link: "/admission/financial-aid"
            },
            {
                text: "Contact Us",
                link: "/contact-ase"
            },
        ]
    },
    {
        heading: "Our Campuses",
        image: "/static/img/navbar/about.png",
        link: "/campuses",
        opts: true,
        options: [
            {
                text: "Benin Campus",
                link: "/campuses/benin"
            },
            {
                text: "Cote d'Ivoire Campus",
                link: "/campuses/cote-d-ivoire"
            },
            {
                text: "Nigeria Campus",
                link: "/campuses/nigeria"
            },
            {
                text: "Hunter African School Program to Expand Representation in Economics (HASPERE)",
                link: "/campuses/hunter-college"
            },
        ]
    },
    {
        heading: "Research",
        image: "/static/img/navbar/about.png",
        link: "/research",
        opts: true,
        options: research_institutes.map(({acronym, title}, index) => ({
            text: title,
            link: `/research/${acronym.toLowerCase()}`
        }))
    },
    {
        heading: "Partnerships",
        image: "/static/img/navbar/about.png",
        link: "",
        opts: true,
        options: [
            {
                text: "About Our Partners",
                link: "/partners"
            },
            {
                text: "Academic Partnerships",
                link: "/partners/academic-partnerships"
            },
            {
                text: "Project Partnerships",
                link: "/partners/project-partners"
            },
            {
                text: "Research Partnerships",
                link: "/research"
                // link: "/partners/research-partnerships"
            },
            {
                text: "Policy Advice",
                link: "/partners/policy-advice"
            },
        ]
    },
    {
        heading: "ASE Arts",
        image: "/static/img/navbar/about.png",
        link: "/ase-art"
    },
    {
        heading: "ASE Athletics",
        image: "/static/img/navbar/about.png",
        link: "/ase-athletics"
    },
    {
        heading: "More",
        image: "/static/img/navbar/about.png",
        link: "",
        opts: true,
        options: [
            {
                text: "News",
                link: "/news"
            },
            {
                text: "ASE In The News",
                link: "/ase-in-the-news"
            },
            {
                text: "Alumni",
                link: "/alumni"
            },
             {
                 text: "Gallery",
                 link: "/ase-gallery"
             },
            {
                text: "Work at ASE",
                link: "/work-at-ase"
            },
            {
                text: "Contact Us",
                link: "/contact-ase"
            },
        ]
    },
    {
        heading: "Support ASE",
        image: "/static/img/navbar/about.png",
        link: "/support-ase"
    },

]

function Navbar() {

    const changeLang = async(lang) => {

        localStorage.setItem('site-language', lang);

        document.getElementsByClassName('.goog-te-combo').value = lang;
        window.location = "#googtrans(en|"+ lang +")";
        
        // await setLanguage(lang);
        location.reload();

    }

    const [navInfo, setNavInfo] = useState(undefined);

    const handleNav = (e) => {
        
        let sibling = e.target.nextSibling;
        setNavInfo(sibling);

        if(!sibling){
            return document.querySelectorAll('.nav-info').forEach(info => info.style.maxHeight = "0px");
        }
        
        if(sibling.style.maxHeight === "1000px") {
            return sibling.style.maxHeight = "0px"
        };
            
        document.querySelectorAll('.nav-info').forEach(info => info.style.maxHeight = "0px");
        return sibling.style.maxHeight = "1000px";
    }

    useEffect(() => {
        let handler = (e) => {
            let navInfo = Array.from(document.querySelectorAll('.nav-info')).find(el => el.contains(e.target));

            if(!navInfo && !e.target.dataset.navLink){
                document.querySelectorAll('.nav-info').forEach(info => info.style.maxHeight = "0px");
                setNavInfo(""); 
            }
        }

        document.addEventListener('mousedown', handler);

        // return document.removeEventListener('mousedown', handler);
    }, []);
    
    const [drawerOpen, setDrawerOpen] = useState(false);
    
    useEffect(() => {

        !localStorage.getItem('site-language') && localStorage.setItem('site-language', "en");

        if(localStorage.getItem('site-language') === "en") return;
        
        const script =  document.createElement('script');
        script.setAttribute('src','//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(script);
        window.googleTranslateElementInit = googleTranslateElementInit;

    }, []);

    function googleTranslateElementInit() {
        new window.google.translate.TranslateElement({
            pageLanguage: 'en'
        }, 'google_translate_element');
    }

  return <>
      {/* <div className="px-5 py-2 flex flex-wrap justify-center lg:justify-between bg-app-dark !text-white">
          <div className=""></div>

          <div className="flex justify-center items-center divide-x divide-white text-xs">
              <Link href="/ase-art"><a className="duration-200 text-xs text-center px-5 hover:bg-white hover:text-app-dark hover:font-bold">ASE Art</a></Link>
              <Link href="/ase-athletics"><a className="duration-200 text-xs text-center px-5 hover:bg-white hover:text-app-dark hover:font-bold">ASE Athletics</a></Link>
              <Link href="#"><a className="duration-200 text-xs text-center px-5 hover:bg-white hover:text-app-dark hover:font-bold">ASE Podcast</a></Link>
              <Link href="#"><a className="duration-200 text-xs text-center px-5 hover:bg-white hover:text-app-dark hover:font-bold">ASE Blog</a></Link>
          </div>

          <div className="flex items-center  gap-5">
              <div className="flex place-content-center gap-3">
                  <p className="text-xs">Search</p>
                  <div className="w-5 h-5 rounded-full bg-white grid place-content-center">
                      <BsSearch className="text-app-dark font-bold text-xs"/>
                  </div>
              </div>

              <Link href="#">
                  <a className="" title="Contact ASE"><ImPhone className="text-white font-bold text-sm"/></a>
              </Link>
          </div>
      </div> */}
      <nav className="sticky top-0 shadow-lg bg-white z-[999999] text-xl flex justify-between items-center py-4 lg:py-0 px-6"
        style={{ fontFamily: 'Inter' }}>
          <Link href="/" className="relative lg:w-28 lg:h-14 w-24 h-12">

              <Image src="/static/img/logo.webp" layout="fill" objectFit="contain"/>

          </Link>

          <div className="lg:flex hidden justify-center items-center ">
              {/* Links */}
              {navlinks.map(({ heading, link, image, options }, index) => (
                  <div key={index} className=" group  border-b-2 border-transparent hover:border-b-[#4778c8] style={{ fontFamily: 'Inter' }}">
                      <Link
                          href={`${options ? '#' : link}`}
                          className="block py-8 px-5  font-normal text-sm text-black "
                          onClick={handleNav}
                          data-nav-link="true">

                          {heading}

                      </Link>

                      {options && 
                      <div style={{maxHeight: '0px'}} className="nav-info overflow-hidden min-h-0 px-12 bg-white text-app-dark absolute top-full left-0 w-full border-b-2f border-[#2E4467]f shadow-lg z-[99]">
                          <div className="py-4">
                              <div className="grid grid-cols-6">
                                  <div className={`col-start-2 ${ heading === "Research" ? 'col-end-5' : 'col-end-4'}`}>
                                      <Link
                                          href={`${link || "#"}`}
                                          className="navbar-link !text-app-dark uppercase font-bold after:hidden pb-1 mb-4">
                                          {heading}
                                      </Link>
                                      {options.map(({ text, link }, index) => (
                                          <Link key={link} href={`${link}`} className="navbar-link">
                                              {text}
                                          </Link>
                                      ))}
                                  </div>
                              </div>
                          </div>

                         
                      </div>
                      }
                  </div>
              ))}

              <div className="flex gap-3">
                  <div className="relative w-4 h-4 rounded-full overflow-hidden cursor-pointer" onClick={() => changeLang('en')}>
                      <Image src="https://flagcdn.com/w20/gb.png" layout="fill" objectFit="cover" alt="img"/>
                  </div>
                  <div className="relative w-4 h-4 rounded-full overflow-hidden cursor-pointer" onClick={() => changeLang('fr')}>
                      <Image src="https://flagcdn.com/w20/fr.png" layout="fill" objectFit="cover" alt="img"/>
                  </div>
              </div>
          </div>
          

          {/* Toggle mobile nav */}
          <div className="lg:hidden block" onClick={() => setDrawerOpen(true)}>
              <HiMenuAlt3 className="w-8 h-8 text-black" />
          </div>

          {/* drawer component */}
          <div id="drawer-disable-body-scrolling" className={`fixed lg:hidden top-0 ${drawerOpen ? 'right-0':'-right-full'} duration-200 z-40 h-screen w-full py-4 overflow-y-auto bg-[#111]`} tabIndex="-1" aria-labelledby="drawer-disable-body-scrolling-label">
              {/* <h5 id="drawer-disable-body-scrolling-label" className="text-base font-semibold text-gray-500 uppercase text-gray-400">Menu</h5> */}
              <button onClick={() => setDrawerOpen(false)} type="button" data-drawer-dismiss="drawer-disable-body-scrolling" aria-controls="drawer-disable-body-scrolling" className="text-gray-400 bg-transparent hover:text-bg-[#333] rounded-lg text-sm p-1.5 absolute top-3.5 right-2.5 inline-flex items-center hover:bg-zinc-900 hover:texzinci9e" >
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  <span className="sr-only">Close menu</span>
              </button>

              <div className="py-16 overflow-y-auto">
                  <ul className="">
                      {navlinks.map(({ heading, link, options }, index) => (
                          <li key={index}>
                              <div type="button" className="flex w-full items-center p-3 text-base font-normal text-bg-[#333] text-zinc-400 hover:bg-zinc-900 border-t border-zinc-900" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                  <Link href={link || "#"} className="flex-1 ml-3 text-left whitespace-nowrap">
                                      {heading}
                                  </Link>
                                  {options && <svg onClick={(e) => openMenu(e)} className="w-6 h-6 duration-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>}
                              </div>

                              {options && 
                              <ul id="dropdown-example" className="overflow-hidden duration-200 max-h-0 bg-neutral-900">
                                  {options.map(({ text, link }, index) => (
                                  <li key={index}>
                                      <Link
                                          href={`${link}`}
                                          className="flex items-center p-3 text-base font-normal text-bg-[#333] text-zinc-400 hover:bg-zinc-900 border-t border-zinc-900">

                                          <span className="ml-3">{text}</span>

                                      </Link>
                                  </li>
                                  ))}
                              </ul>
                              }
                          </li>
                      ))}
                  </ul>
                  <div className="flex justify-center gap-3 py-4">
                      <div className="text-xs text-white font-bold">Language: </div>
                      <div className="relative w-4 h-4 rounded-full overflow-hidden cursor-pointer" onClick={() => changeLang('en')}>
                          <Image src="https://flagcdn.com/w20/gb.png" layout="fill" objectFit="cover" alt="img"/>
                      </div>
                      <div className="relative w-4 h-4 rounded-full overflow-hidden cursor-pointer" onClick={() => changeLang('fr')}>
                          <Image src="https://flagcdn.com/w20/fr.png" layout="fill" objectFit="cover" alt="img"/>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
  </>;
}

export default Navbar
