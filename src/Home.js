const Home = () => {
    const title = "Welcome to Alex blog"
    const likes = 60;
    const link = "https://github.com/AlexandreCerf/dojo-blog-alex";

    return ( 
        <div className="home">
            <h2>{title}</h2>
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