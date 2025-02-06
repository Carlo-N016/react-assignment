import { useState } from "react";

export default function ContactForm(){

    const [user,setUser] = useState('');
    const [submit, setSubmitted] = useState(false);
    const [message, setMesage] = useState('');

    const sumbitHandle = (e) => {
        e.preventDefault();
        setSubmitted(true)
    };

    return(
        <div>
            {submit ? (
                <p>Thank you, {user}, for the message!!! I will get back you as soon as possible</p>
            ):(
                <form onSubmit={sumbitHandle}>
                    <div>
                        <label>Your Name:</label>
                        <input type="text"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                required
                        />
                    </div>
                    <div>
                        <label>Your Message:</label>
                        <textarea 
                           value={message}
                           onChange={(e) => setMesage(e.target.value)}  
                           required       
                        />
                    </div>
                    <div>
                        <button type="submit">Send</button>
                    </div>
                </form>
            )}
        </div>
    );
}