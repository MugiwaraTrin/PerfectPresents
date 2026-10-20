import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const giftPrices = {
    "small-hasPaper": 10,
    "medium-hasPaper": 20,
    "large-hasPaper": 30,
    "small-needsPaper": 13,
    "medium-needsPaper": 18,
    "large-needsPaper": 28,
}

export async function POST(request){

    const body = await request.json();
    
    const quantities = body.quantities;

    const minDeposit = 50;
    console.log(quantities);

    let estimatedTotal = 0;

    for (const id in quantities) {
        estimatedTotal += quantities[id] * giftPrices[id];
    }


    const session = await stripe.checkout.sessions.create({

        
        mode: 'payment',
        
        line_items:[
            {
                price_data: {
                    currency: "usd",

                    product_data:{
                        name: `Perfect Presets Deposit -  Estimated Total: $${estimatedTotal}`,
                        description: `Remaining Balance: $${estimatedTotal - minDeposit}`,
                    },
                    unit_amount: minDeposit * 100,
                    
                },
                quantity: 1
            }
        ],

        metadata: {
            estimatedTotal: estimatedTotal.toString(),
            remainingBalance: (estimatedTotal - minDeposit).toString()
        },

        success_url: `${request.headers.get("origin")}/success`,
    });

    return Response.json({ 
        url: session.url
    });
}