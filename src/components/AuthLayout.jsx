import OliTechsLogo from './portfolio/OliTechsLogo';
export default function AuthLayout({title,subtitle,children}){return <main className="auth-page"><div className="auth-card"><OliTechsLogo href="/"/><div className="auth-heading"><h1>{title}</h1><p>{subtitle}</p></div>{children}</div></main>}
