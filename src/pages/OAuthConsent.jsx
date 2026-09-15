import { Link } from 'react-router-dom';
import AuthLayout from '@/components/AuthLayout';
export default function OAuthConsent(){return <AuthLayout title="Authorization" subtitle="Review the requested access before continuing."><div className="oauth-box"><p>This authentication route is ready for the existing OAuth provider integration.</p><Link className="btn btn-primary" to="/">Continue to OliTechs</Link></div></AuthLayout>}
