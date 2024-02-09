import Link from "next/link";

export default function Setings(){
    return(
        <>
    <h1> This is the User settings Page</h1>

    <Link href={'User/settings'} > Settings</Link>
        </>
    )
}