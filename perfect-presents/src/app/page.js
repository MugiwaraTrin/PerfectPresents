import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    
    <html>

      <head>
        
        <title>Perfect Presents</title>

        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="description" content="At-Home luxury gift wrapping service."/> 

        <link rel="stylesheet" href="/globals.css" />
        <link rel="icon" href="/images/giftIcon.png" type="image/png"/>
        
      </head>


      <body>

        <main>

          <div>
            <h1>Perfect Presents</h1>
          </div>
          
          <h2>Find the perfect gift for any occasion <br></br>
          Luxury gift wrapping brought to your doorstep
          </h2>

          <ul class="navigation">

            <li><Link href="/about">About Us</Link></li>
            <li>Gift Recommendations</li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li>FAQs</li>

          </ul>
          
        </main>

      </body>


    </html>

  );
}
