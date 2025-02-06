import NavigBar from "../components/navigation"
import FormContact from '../components/FormContact'

export default function Contact(){
    return(
        <div>
            <NavigBar />
            <h1>Contact Me</h1>
            <p>Any chance you want to contact me? Send me a message!!</p>
            <FormContact />
        </div>
    );
};