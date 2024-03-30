const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault(); // form submit korar somoy page reload hobe na.
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.phone.value)
        console.log('Form submitted');
    }
    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="text" name="phone" />
                <br />
                {/* <button>Submit</button> */}
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;