import { Link } from 'react-router';

export default function Home() {
  return (
    <div>
      <h1>This is the home!!</h1>
      <Link to="/about">Go to about</Link>
    </div>
  );
}
