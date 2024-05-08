import "../css/comment/commentStyle.css"
const Comment = ({username,comment})=>{


    return <>
            <div className="comment">
                <p><span className="username">{username}</span> :{comment}</p>
            </div>
    </>
}

export default Comment;