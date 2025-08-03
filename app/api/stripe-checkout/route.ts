import { stripe } from "@/app/utils/stripe"
import { NextResponse } from "next/server"

export const POST = async (req: Request) => {
    try {
        const { items } = await req.json()

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
        const stripeSession = await stripe.checkout.sessions.create({
            line_items: [...lineItems],
            mode: 'payment',
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