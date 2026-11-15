import Comment from "./Comment";

function CommentList({comments}) {
    if (comments.length==0) {
        return <p>No comments yet. Be the first to comment!</p>;
    }
    return (
        <ul>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment}/>
            ))}
        </ul>
    )
}

export default CommentList;