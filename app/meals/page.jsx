import Link from "next/link";

export default function Meals() {
    return (
        <main>
            <h1>Meals Page</h1>
            <Link href="./">Home</Link>
            <Link href="./meals/share">Share</Link>
            <Link href="./meals/meal-1">Meal 1</Link>
        </main>
    )
}