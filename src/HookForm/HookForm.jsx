import useInputState from "../components/hooks/useInputState";

const HookForm = () => {
    // const [name,handelNameChange] = useInputState('Rojot')
    const emailState = useInputState('xyz@gmail.com')

    const handelSubmit = e =>{
        // console.log(name)
        // e.preventDefault(name);
        console.log(emailState.value)
        e.preventDefault(emailState.value);
    }
    return (
        <div>
            <form action="" onSubmit={handelSubmit}>
                {/* <input value={name} onChange={handelNameChange} type="text" name="name" />
                <br /> */}
                <input {...emailState} type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;