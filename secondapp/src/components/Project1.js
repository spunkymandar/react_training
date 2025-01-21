// import './component.css'
const Project1=({title,details})=>{
    return(
        <>
        <header className="header">
            <h1>{title}</h1>
        </header>
        <section className="description">
            <p>{details}</p>
        </section>
        
        </>
    );
}
export default Project1