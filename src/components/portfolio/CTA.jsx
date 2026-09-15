import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
export default function CTA(){return <section className="cta-section"><div className="cta-glow"/><div className="container cta-inner"><Reveal direction="left"><div><span className="eyebrow">LET'S WORK TOGETHER</span><h2>Have a Project in Mind?</h2><p>I'm always open to discussing new projects, creative ideas, or opportunities to bring your digital vision to life.</p></div></Reveal><Reveal direction="right"><a className="btn btn-light" href="#contact">Get In Touch <ArrowRight size={17}/></a></Reveal></div></section>}
