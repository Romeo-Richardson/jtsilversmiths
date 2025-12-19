import { stripe } from "@/app/utils/stripe"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        const { items, total, isExpressShipping } = await req.json()

        console.log(items)

        // const total = (items as any[]).map((item: any) => item.price).reduce((a, b) => a + b)

        // console.log(total)

        const lineItems = items.map((item: any) => {
            return {
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: item.name,
                        description: `Width: ${item.width ? item.width : "N/A"}, Movement: ${item.movement ? item.movement : "N/A"}, Angle: ${item.angle ? item.angle : "N/A"}`
                    },
                    unit_amount: item.price * 100,
                },

                quantity: item.quantity
            }
        })

        async function createShippingRate(amount: number, minDay: number, maxDay: number, name: string) {
            console.log(`express is ${isExpressShipping}`)

            if (total > 50) {
                amount = 1195
            }
            if (total > 75) {
                amount = 1395
            }
            if (total > 100) {
                amount = 1595
            }
            if (total > 150) {
                amount = 1795
            }
            if (total > 250) {
                amount = 2195
            }
            if (total > 350) {
                amount = 2395
            }

            if (isExpressShipping) {
                amount = amount + 1500
                name = "Express Shipping"
            }

            try {
                const shippingRate = await stripe.shippingRates.create({
                    display_name: name,
                    type: 'fixed_amount',
                    fixed_amount: {
                        amount: amount, // Amount in cents (e.g., $5.00)
                        currency: 'usd',
                    },
                    delivery_estimate: {
                        minimum: { unit: 'business_day', value: minDay },
                        maximum: { unit: 'business_day', value: maxDay },
                    },
                    tax_behavior: 'exclusive', // or 'inclusive', 'unspecified'
                    tax_code: 'txcd_92010001', // Shipping tax code
                });
                console.log('Shipping Rate created:', shippingRate.id);
                return shippingRate.id;
            } catch (error) {
                console.error('Error creating shipping rate:', error);
            }
        }

        const stripeSession = await stripe.checkout.sessions.create({
            line_items: [...lineItems],
            mode: 'payment',
            billing_address_collection: "required",
            shipping_address_collection: { allowed_countries: ["US", "CA"] },
            shipping_options: [
                {
                    shipping_rate: await createShippingRate(1020, 3, 5, "Standard Shipping")
                },
            ],
            success_url: "https://jtsilversmiths.com/",
            cancel_url: "https://jtsilversmiths.com/shop"
        })
        console.log(stripeSession)
        return NextResponse.json({ details: stripeSession }, { status: 200 })
    } catch (error: any) {
        console.log(error)
        return NextResponse.json({ error }, { status: 500 })
    }
}