import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '6rem 1.5rem', textAlign: 'center' }}>
      <h1 className="h1-title" style={{ fontSize: '3rem', marginBottom: '1rem' }}>404 - Page Not Found</h1>
      <p className="sub-text" style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
        The software tool or page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className="btn btn-primary btn-lg">
        Return to Home Page
      </Link>
    </div>
  );
}
