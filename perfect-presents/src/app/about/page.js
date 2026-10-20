import Link from "next/link";
import Image from "next/image";

export default function About() {

    return(

    <html>

        <head>
            <title>About Us - Perfect Presents</title>

            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta name="description" content="About Perfect Presents - At-Home luxury gift wrapping service."/>

            <link rel="stylesheet" href="/globals.css"/>

            <link rel="icon" href="/images/giftIcon.png" type="image/png"/>
        </head>
        
        <body>
            <main>

                <div>
                    <h1><Link href="/">Perfect Presents</Link></h1>
                </div>

                <h2>About Us</h2>

                <ul id="Navigation" class="navigation">

                    <li>About Us</li>
                    <li><Link href="/gift-recommendations">Gift Recommendations</Link></li>
                    <li><Link href="/pricing">Pricing</Link></li>
                    <li>FAQs</li>

                </ul>

                <div>
                    <h4><q>Our mission is to provide a seamless and luxurious gift wrapping experience at the comfort of your home.</q></h4>
                </div>

                
                <h3> <em>Perfect Presents</em> is a student owned at-home luxury gift wrapping service, bringing elegance and convenience to your doorstep. <br></br>
                Servicing the DC, Maryland, and Virginia areas, we aim to make every gift-giving occasion special and memorable. <br></br>
                Owned and operated by University of Maryland students and Alumni, we are committed to delivering exceptional gift wrapping services that combine style, quality, and convenience.
                <br></br>
                Our website, serving as a project and learning opportunity for University of Maryland Computer Science students, helping practice and gain experience in web development 
                and user experience design.
                Our services is perfect for any celebration, whether it&apos;s a birthday, anniversary, holiday, or corporate gifts.
                </h3>

                <div id="ceo">
                    <details>
                    <summary><strong>About Our CEO</strong></summary>

                        <div id="container">
                            <p><em>Perfect Presents</em> was founded with a vision of providing her skill and passion of neat and elegant gift wrapping for every gift-giving occasion!
                            When founding, Trinity often thought of how gift buying has changed over the years: with the rise of online shopping, many people face the delima of a mountain of gifts and not knowing where to start. 
                            This inspired her to create a service, thinking especially of families who often have multiple gifts to wrap and limited time to take them to a mall.
                            </p>

                            <div>
                                <Image src="/images/ceo.jpg" alt="CEO" width={200} height={200}/>
                                <figcaption>CEO of Perfect Presents</figcaption>
                            </div>
                        
                        </div>



                    </details>
                </div>



            </main>
        </body>
    </html>

);

}