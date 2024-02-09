import Register from './register/page';
import Settings from './settings/page';

export default function Home(){
    return(
        <>
    <h1> This is the User Page</h1>

    <div>
        <Register></Register>
        <Settings></Settings>
    </div>

        </>
    )
}