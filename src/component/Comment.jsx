import  style from "../css/comment/commentStyle.module.css"
const Comment = ({username,comment})=>{

    return <>
            <div className={style.comment_c}>
                <p><span className={style.username}>{username}</span> :<span className={style.comment}>{comment}</span></p>
            </div>
    </>
}

export default Comment;