"use client"
import { useRouter } from "next/navigation";

export default function OrderProduct() {
    const router = useRouter();

    const handleClick = () => {
        console.log("Button clicked");
        router.back();
    }
    return (
        <>
            <h1>Order product</h1>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}