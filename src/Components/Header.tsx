import React from "react";

const Header = () => {
    
    const links = [
        'Home',
        'Services',
        'Work',
        'About us',
        'Contact'
    ]
  
    return (
    <header className="fixed top-0 left-0 py-6 z-[999] flex justify-between items-center">
      <div className="py-2 px-4 text-2xl cursor-pointer after:bg-[rgba(255,255,255,.8)] after:h-0.5 after:top-full after:absolute outline outline-2 outline-[rgba(255,255,255,.2)]  after:left-0 after:w-1/2 before:bg-red-800 relative before:absolute before:bottom-full before:right-0 before:h-0.5 before:w-1/2 after:transition-all before:transition-all after:ease-[34,.22,.05,.96] before:ease-[34,.22,.05,.96] after:duration-300 before:duration-300 hover:after:w-full hover:before:w-full group">
        <h1 className="tracking-wider uppercase text-white">Digi-Talks</h1>
        <span className="absolute duration-300 ease-[34,.22,.05,.96] transition-all delay-300 group-hover:h-[110%] -translate-x-full -top-0.5 left-0 bg-red-800 w-0.5 h-0"></span>
        <span className="absolute duration-300 ease-[34,.22,.05,.96] transition-all delay-300 group-hover:h-[110%] translate-x-full -bottom-0.5 right-0 bg-[rgba(255,255,255,.8)] w-0.5 h-0"></span>
      </div>

      <ul className="flex gap-2 text-[18px] font-medium text-white">
        {
            links.map((e, i) => {
                return(
                    <li key={i}
                        className="relative px-6 link cursor-pointer py-1"
                    >{e} 
                        <span className="absolute transition-all duration-300 ease-[34,.22,.05,.96] top-full left-0 bg-[radial-gradient(circle,rgba(255,255,255,.8),rgba(255,255,255,.1))] w-full h-1" />
                    </li>
                )
            })
        }
      </ul>
    </header>
  );
};

export default Header;
