import { useState } from "react";
const StatefulForm = () => {
    const [name, setName] = useState('Maruf');
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState('');
    const handleSubmit = e =>{
        e.preventDefault();
        if(password.length < 6){
            setError('Password must be 6 characters or longer')
        }
        else{
            setError('')
        }
        console.log(email);
        console.log(password);
    }

    const  handleEmailChange = e =>{
        console.log(e.target.value);
        setEmail(e.target.value);
    }

    const  handlePasswordChange = e =>{
        console.log(e.target.value);
        setPassword(e.target.value);
    }

    const  handleNameChange = e =>{
        console.log(e.target.value);
        setName(e.target.value);
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input value={name}
                    onClick={handleNameChange}
                type="text" name="name" />
                <br />
                <input
                    onChange={handleEmailChange}
                type="email" name="email" />
                <br />
                <input 
                    onChange={handlePasswordChange}
                type="password" name="password" required/>
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
            
        </div>
    );
};

export default StatefulForm;


/*
Controlled Components -> onChange, handlePasswordChange

. In a controlled component, the state of the form elements is controlled by React.

. The value of the input is set through the component's state and is updated through event handlers.

. When the input value changes, the state is updated, and React re-renders the component to reflect the new value.

. Controlled components offer more control over the form's behavior and provide a clear data flow.

. The email input element value is held by the email state.

. When the email value is being changed in the form by the user, the onChange event handle associated with the email input field will be triggered.

. All the changes will be handled using the setEmail method.

. Hence the value of the input field is controlled using the react state.

. The single source of truth for the input element is React state. Therefore, the above component is a controlled component.

*/