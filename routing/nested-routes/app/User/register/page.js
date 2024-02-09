import Link from 'next/link';


export default function Register(){
    return(
        <>
    <h1> This is the User registration  Page</h1>
    <Link href={'User/register'}> Register </Link>
    </>
    )
}