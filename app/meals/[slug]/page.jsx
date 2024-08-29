import Link from "next/link";

export default function DynamicMeals({params}){
    return (
        <main>
            <h1>Dynamic meal</h1>
            <p>{params.slug}</p>
            <Link href="./">Home</Link>
        </main>
    )
}