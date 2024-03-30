import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../Grandpa/Grandpa";
const Aunty = () => {
    const [money, setMoney] = useContext(MoneyContext);
    return (
        <div>
            <h2>Aunty</h2>
            <section className="flex">
                <Cousin name={'Asifa'}></Cousin>
                <Cousin name={'Ariful'}></Cousin>
            </section>
            <p>Money: {money}</p>
            <button onClick={()=>setMoney(money + 1000)}>Add 1000tk</button>
        </div>
    );
};

export default Aunty;

/*
useContext():
Call useContext at the top level of your component to read and subscribe to context.


Parameters

. SomeContext: The context that created with createContext.

· The context itself does not hold the information, it only represents the kind of information you can provide or read from components.


Returns

. useContext returns the context value for the calling component.

. It is determined as the value passed to the closest SomeContext.Provider above the calling component in the tree.

· If there is no such provider, then the returned value will be the defaultValue you have passed to createContext for that context.

· The returned value is always up-to-date. React automatically re-renders components that read some context if it changes.


Usage

· Passing data deeply into the tree
· Updating data passed via context
· Specifying a fallback default value
. Overriding context for a part of the tree
· Optimizing re-renders when passing objects and functions



Use cases

. Theming: Dark or light theme for your website and pass it down to all the components

· User Authentication: A user's authentication status and pass it down to all the components

. Multilingual Support: Current language of your application in the context and pass it down to all the components

· Accessing data from external sources: Store data retrieved from external sources such as APls or databases and make it available to all component


Pitfall

· Use default initial values

· Use a separate file to define your Context

. Keep Context API limited to global state management only



*/