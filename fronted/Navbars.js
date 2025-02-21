import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#333', color: 'white' }}>
      <h2>FLEX-IT-OUT</h2>
      <div>
        <Link href="/"><button style={{ marginRight: '10px' }}>Home</button></Link>
        <Link href="/dashboard"><button style={{ marginRight: '10px' }}>Dashboard</button></Link>
        <Link href="/login"><button>Login</button></Link>
      </div>
    </nav>
  );
}
