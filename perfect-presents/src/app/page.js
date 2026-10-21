import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div>
        <h1>Perfect Presents</h1>
      </div>

      <h2>
        Find the perfect gift for any occasion <br></br>
        Luxury gift wrapping brought to your doorstep
      </h2>

      <ul className="navigation">
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li>Gift Recommendations</li>
        <li>
          <Link href="/pricing">Pricing</Link>
        </li>
        <li>FAQs</li>
      </ul>
    </main>
  );
}
