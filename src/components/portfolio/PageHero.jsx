import Reveal from './Reveal';
export default function PageHero({eyebrow,title,description}){return <section className="page-hero"><div className="container"><Reveal><span className="eyebrow">{eyebrow}</span><h1>{title}</h1>{description&&<p>{description}</p>}</Reveal></div></section>}
