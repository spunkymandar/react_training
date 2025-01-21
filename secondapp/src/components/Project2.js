// import './component.css'
const Project2=(props)=>{
    return(
        <>
        <header className="header">
            <h1>{props.title}</h1>
        </header>
        <section className="description">
            <p>{props.details}</p>
        </section>
        </>
    )
}
export default Project2