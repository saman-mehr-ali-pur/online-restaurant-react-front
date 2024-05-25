import  style from "../css/comment/commentStyle.module.css"
const Comment = ({username,comment})=>{


    return <>
            <div className={style.comment}>
                <p><span className={style.username}>{username}</span> :{comment}</p>
            </div>
    </>
}

export default Comment;