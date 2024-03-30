import { useEffect, useRef } from "react";
const RefForm = () => {

    const nameRef = useRef(null);  
    const emailRef = useRef(null);
    const passwordRef = useRef(null)  

    useEffect(()=>{
        nameRef.current.focus(); // website dukar por auto input box e coursor niye jay
    },[])

    const handelSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }
    return (
        <div>
            <form action="" onSubmit={handelSubmit}>
                <input ref={nameRef} type="text" defaultValue={'Maruf'} name="name" />
                <br />
                <input ref={emailRef} type="email" name="email" />
                <br />
                <input ref={passwordRef} type="password" name="password" />
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default RefForm;


/*
useRef:
What is useRef?
useRef is a React Hook that lets you reference a value that's not needed for rendering.

Parameters

initialValue:

· The value you want the ref object's current property to be initially.

· It can be a value of any type.
· This argument is ignored after the initial render.



Returns

· Returns an object with a single property current.
· Initially, it's set to the initialValue you have passed. You can later set it to something else.
· If you pass the ref object to React as a ref attribute to a JSX node, React will set its current property.
. On the next renders, useRef will return the same object.


Pitfall

· You can mutate the ref.current property. Unlike state, it is mutable.
. When you change the ref.current property, React does not re-render your component.
. In Strict Mode, React will call your component function twice in order to help you find accidental impurities. This is development-only 
behavior and does not affect production. Each ref object will be created twice, but one of the versions will be discarded.
. Do not write or read ref.current during rendering, except for initialization. This makes your component's behavior unpredictable.


Uncontrolled Components -> useRef

. In an uncontrolled component, the form element's state is managed by the DOM rather than React. You can directly access the DOM element using references after rendering.

. Thus uncontrolled components do not depend on any state of input elements or any event handler. This type of component does not care about real-time input changes.

. These ref attributes correspond to the value of the email field of the input form.

. Using react ref we can hold the instances of the HTML element in their .current property.

. Later using .current, we can get the value of input elements using the .value property.
*/