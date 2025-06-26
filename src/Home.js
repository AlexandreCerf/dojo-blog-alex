import { useState } from "react";

const Home = () => {

    //let name = "Theo";

    const [name, setName] = useState("Theo");
    const [age, setAge] = useState(25);

    const title = "Welcome to Alex blog";
    const likes = 60;
    const link = "https://github.com/AlexandreCerf/dojo-blog-alex";

    const handleClick = () => {
        console.log("Salut");
    }
    const handleClickAgain = (nameToFunction) => {
        console.log("Salut " + nameToFunction);
    }

    const handleChangeName = () => {
        setName("Vincent");
        setAge(28)
    }



    return ( 
        <div className="home">
            <h2>{title}</h2>
            <p>{ name } a { age } ans </p>
            <button onClick={handleChangeName}>Change le nom et age</button>
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => {handleClickAgain('Alex')}}>Click me again</button>
            <p>Liked { likes } times</p>
            <p>{ 10 }</p>
            <p>{ "Hey" }</p>
            <p>{ [1,2,3,4,5,6] }</p>
            <p>{ Math.random()*10}</p>
            <a href={link}> Repo github Project</a>
        </div>
     );
}
 
export default Home;