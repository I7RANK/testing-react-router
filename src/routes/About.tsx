import { Link } from 'react-router';

export default function About() {
  return (
    <div>
      <h1>About page</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
        provident sunt doloribus vel aspernatur eum consectetur sit at alias
        veniam delectus repellat, officia iure quos, quas corporis minus nisi
        quisquam.
      </p>

      <Link to="/">Go to home</Link>
    </div>
  );
}
