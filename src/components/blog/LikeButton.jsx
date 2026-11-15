import {useState} from "react";

function LikeButton() {
    const [liked, setLiked] = useState(false);

    function handleLike() {
        setLiked((previousLiked) => !previousLiked);
    }

    return (<button type="button" onClick={handleLike} aria-pressed={liked}>{liked ? "♥️ Liked" : "♡ Like"}</button>);
}

export default LikeButton;