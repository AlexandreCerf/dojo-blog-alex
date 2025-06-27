import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs ] = useState([
        {title: "New website", body:"lorem ipsum...", author:"Alex", id:1},
        {title: "Welcome to my world !", body:"lorem ipsum...", author:"Alex", id:2},
        {title: "Web dev tool tips", body:"lorem ipsum...", author:"Theo", id:3},
        {title: "Custom UI for Apple", body:"lorem ipsum...", author:"Vincent", id:4}
    ]);


    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All blogs"/>
        </div>
     );
}
 
export default Home;