import { Link } from "react-router-dom"
const Dashboard=()=>{
    return(
        <>
            <h1>In Dashboard</h1>
            <h3>You can go to your orders page at :</h3>
            {/* <a href='/orders'>click here</a> */}
            <p>Go to the <Link to="/orders">Past Orders</Link></p>
        </>
    )
}
export default Dashboard