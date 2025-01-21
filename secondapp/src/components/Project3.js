// import './component.css'
const Project3=(props)=>{
    return(
        <>
        <header class="header">
            <h1>{props.title}</h1>
        </header>
        <section class="description">
            <p>{props.details}</p>
        </section>
        </>
    )
}
export default Project3