import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>Welcome to FLEX-IT-OUT</h1>
      <Link href="/dashboard"><button>Start Workout</button></Link>
      <Link href="/login"><button>Login</button></Link>
    </div>
  );
}
