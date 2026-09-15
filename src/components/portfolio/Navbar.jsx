import { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import OliTechsLogo from './OliTechsLogo';

const links = [['Home','home'],['About','about'],['Services','services'],['Skills','skills'],['Projects','projects'],['Testimonials','testimonials'],['Contact','contact']];
export default function Navbar() {
  const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
  useEffect(()=>{const onScroll=()=>setScrolled(window.scrollY>24); window.addEventListener('scroll',onScroll,{passive:true}); return()=>window.removeEventListener('scroll',onScroll)},[]);
  const go=id=>{setOpen(false); document.getElementById(id)?.scrollIntoView({behavior:'smooth'});};
  return <header className={`navbar ${scrolled?'navbar-scrolled':''}`}><div className="container nav-inner"><OliTechsLogo/><nav className={open?'nav-links nav-open':'nav-links'} aria-label="Primary navigation">{links.map(([label,id])=><button key={id} onClick={()=>go(id)}>{label}</button>)}<button className="mobile-talk" onClick={()=>go('contact')}>Let's Talk <ArrowUpRight size={15}/></button></nav><button className="nav-talk" onClick={()=>go('contact')}>Let's Talk <ArrowUpRight size={15}/></button><button className="menu-toggle" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div></header>;
}
