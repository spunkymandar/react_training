
const LanguageSelector=({country})=>{
    const languages={
        de:'de-DE',
        us:'en-US',
        uk:'en-GB'
    }

    return(
        <>
            <p><b>Inside Language Selector</b></p>
            You selected : {languages[country]}
        </>
    )
}
export default LanguageSelector