import Friend from "../Friend/Friend";
import Special from "../Special/Special";

const Cousin = ({name}) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p>{name}</p>
            <section className="Flex">
                {
                    <Special ></Special>
                }
                {
                    name === 'Ariful' && <Friend></Friend>
                }
            </section>
        </div>
    );
};

export default Cousin;