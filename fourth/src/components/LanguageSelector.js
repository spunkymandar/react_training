const LanguageSelector=(props)=>{
    const languages={
        de:'de-DE',
        us:'en-US',
        uk:'uk-GB'
    }
    return(
        <>
            <p>Inside the LanguageSelector</p>
            <p>You selected : <b>{languages[props.country]}</b></p>
        </>
    )
}
export default LanguageSelector