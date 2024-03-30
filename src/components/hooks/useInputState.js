import { useState } from "react"

const useInputState = (defaultValue=null) =>{
    const [value, setValue] = useState(defaultValue);

    // const handleChange = e =>{
    //     setValue(e.target.value);
    // }
    const onChange = e =>{
        setValue(e.target.value);
    }
    // return [value, handleChange];
    return{
        value,
        onChange
    }
}

export default useInputState;


/*
Custom Hook

Sometimes, you'll wish that there was a Hook for some more specific purpose:
for example,

. to fetch data,
. to keep track of whether the user is online, or
. to connect to a chat room.

You might not find these Hooks in React, but you can create your own Hooks for yourapplication's needs.



How to write a Custom Hook

Custom Hook is a JavaScript function which we create by ourselves, when we want to share logic between other JavaScript functions. 
It allows you to reuse some piece of code in several parts of your app.


->You must follow these naming conventions:

. React component names must start with a capital letter, like StatusBar and SaveButton.

. Hook names must start with "use" followed by a capital letter, like useState (built-in) or useOnlineStatus




Rules of custom hooks

Because custom hook is a JS function, the Rules of Hooks apply to it as well. Those are:
. Never call Hooks from inside a loop, condition or nested function
. Hooks should sit at the top-level of your component
. Only call Hooks from React functional components
· Never call a Hook from a regular function
. Hooks can call other Hooks

*/