import "../css/loading/loadingStyle.css"
import loadingGif from "../assets/sprinner3.gif"
const Loading = ()=>{

    return <>
        {/* <div className="inner-div"><h1>Loading ...</h1></div> */}
        <div className="inner-div">
        <div><img src={loadingGif} alt="" />
        <h1>Loading ...</h1>
        </div>
        
        </div>
    </>
}


export default Loading;