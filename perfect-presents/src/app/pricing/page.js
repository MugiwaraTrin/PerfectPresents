"use client";

import { useState } from "react";
import Link from "next/link";

export default function Pricing() {

    const [quantities, setQuantities] = useState({
        "small-hasPaper": 0,
        "medium-hasPaper": 0,
        "large-hasPaper": 0,
        "small-needsPaper": 0,
        "medium-needsPaper": 0,
        "large-needsPaper": 0
    });


    const giftOptions = [

        {
            id: "small-hasPaper",
            paperStatus: "hasPaper",
            name: "Small Gift Wrapping",
            price: 10,
            timeEstimate: 5
        }
        ,
        {
            id: "medium-hasPaper",
            paperStatus: "hasPaper",
            name: "Medium Gift Wrapping",
            price: 15,
            timeEstimate: 10
        },
        {
            id: "large-hasPaper",
            paperStatus: "hasPaper",
            name: "Large Gift Wrapping",
            price: 25,
            timeEstimate: 15
        },
        {
            id: "small-needsPaper",
            description: "Small-sized gifts that require wrapping paper.",
            paperStatus: "needsPaper",
            name: "Small Gift Wrapping",
            price: 13,
            timeEstimate: 5
        },
        {
            id: "medium-needsPaper",
            description: "Medium-sized gifts that require wrapping paper.",
            paperStatus: "needsPaper",
            name: "Medium Gift Wrapping",
            price: 18,
            timeEstimate: 10
        },
        {
            id: "large-needsPaper",
            description: "Large-sized gifts that require wrapping paper.",
            paperStatus: "needsPaper",
            name: "Large Gift Wrapping",
            price: 28,
            timeEstimate: 15
        }
    ]


    const totalPrice = giftOptions.reduce((total, option) => {
        return total + (quantities[option.id] * option.price);
    }, 0);

    const estimatedTime = giftOptions.reduce((total, option) => {
        return total + (quantities[option.id] * option.timeEstimate);
    }, 0);


    function setQuantity(id, amount){
        setQuantities(previous => {
            
            const updated = {...previous};

            updated[id] += amount;

            if (updated[id] < 0) {
                updated[id] = 0;
            }
            
            return updated;
        });
    }

    async function handleCheckout() {

        const response =  await fetch("/api/checkout", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ quantities })

        });


        if (!response.ok) {
            console.error("Checkout request failed");
            return;
        }

        const data = await response.json();

        window.location.href = data.url;
    }
    

  return (

    <main>
        <div>
            <h1><Link href="/">Perfect Presents</Link></h1>
        </div>

        <h2>Pricing</h2>

        <ul className="navigation">
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/gift-recommendations">Gift Recommendations</Link></li>
            <li><Link href="/pricing">Pricing</Link></li>
            <li>FAQs</li>
        </ul>

        <div className="pricing-section">

            <details>

                <summary><strong>Have Wrapping Paper</strong></summary>
                

                <div className="item-section"> 

                    <div className="service">

                        <h2>Small Gift Wrapping</h2>
                        <h4>Jewelry, Phones, Airpods, Small Toys, etc.</h4>
                        <p>Price: $10 per gift</p>
                    </div>

                    <div className="item-quantity">

                        <div>
                            <button type="button" onClick={() => setQuantity("small-hasPaper", -1)} data-field="quantity">-</button>
                            <input type="number" value={quantities["small-hasPaper"]} min="0"></input>
                            <button type="button" onClick={() => setQuantity("small-hasPaper", 1)} data-field="quantity">+</button>
                        </div>

                    </div>

                </div>

                <hr></hr>

                <div className="item-section"> 

                    <div className="service">

                        <h2>Medium Gift Wrapping</h2>
                        <h4>Medium-sized gifts such as books, clothing, and home decor.</h4>
                        <p>Price: $15 per gift</p>
                    </div>

                    <div className="item-quantity">

                        <div>
                            <button type="button" onClick={() => setQuantity("medium-hasPaper", -1)}>-</button>
                            <input type="number"  value={quantities["medium-hasPaper"]} min="0"></input>
                            <button type="button" onClick={() => setQuantity("medium-hasPaper", 1)}>+</button>
                        </div>

                    </div>

                </div>

                <hr></hr>

                <div className="item-section"> 

                    <div className="service">

                        <h2>Large Gift Wrapping</h2>
                        <h4>Large-sized gifts such as electronics, large toys, and bulk items.</h4>
                        <p>Price: $25 per gift</p>
                    </div>

                    <div className="item-quantity">

                        <div>
                            <button type="button" onClick={() => setQuantity("large-hasPaper", -1)}>-</button>
                            <input type="number" value={quantities["large-hasPaper"]} min="0"></input>
                            <button type="button" onClick={() => setQuantity("large-hasPaper", 1)}>+</button>
                        </div>

                    </div>

                </div>



            </details>

        </div>

        <div className="pricing-section">

            <details>
              <summary><strong>Need Wrapping Paper</strong></summary>
        
                    
                {giftOptions.filter(option => option.paperStatus === "needsPaper")
                            .map((option, index, filteredOptions) => (

                <div key={option.id}>

                <div className="item-section">

                    <div className="service">
                        <h2>{option.name}</h2>
                        <h4>{option.description}</h4>
                        <p>Price: ${option.price} per gift</p>
                    </div>

                    <div className="item-quantity">
                        <div>
                            <button type="button" onClick={() => setQuantity(option.id, -1)}>-</button>
                            <input type="number" value={quantities[option.id]} min="0"></input>
                            <button type="button" onClick={() => setQuantity(option.id, 1)}>+</button>
                        </div>
                    </div>

                </div>

                    {index < filteredOptions.length - 1 && <hr></hr>}

                </div>
                
                ))}
         

            </details>

        </div>


        <footer>


            <h2> Total: ${totalPrice}</h2>
            <p>Estimated Time: {estimatedTime} minutes</p>

            
            
            <button type="button" onClick={handleCheckout}>Book and Pay</button>

        </footer>

    </main>

  );
}