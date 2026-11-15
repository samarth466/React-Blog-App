import {useId, useState} from "react";
import styles from "./Comments.module.css";

function CommentForm({onAddComment}) {
    const [author, setAuthor] = useState("");
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");
    const id = useId();

    async function handleSubmit(event) {
        event.preventDefault();
        const name = author.trim();
        const comment = text.trim();

        if (!name || !comment || !email.trim() || submitting) {
            return;
        }

        setSubmitting(true);
        setError("");

        try {
            await onAddComment(name, comment, email.trim());

            setAuthor("");
            setEmail("");
            setText("");
        } catch (error) {
            setError(error.message || "Unable to submit your comment.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label htmlFor={`${id}-author`}>Your name</label>
                <input id={`${id}-author`} type="text" value={author} onChange={(event) => setAuthor(event.target.value)} disabled={submitting} required/>
            </div>
            <div>
                <label htmlFor={`${id}-email`}>Your Email</label>
                <input id={`${id}-email`} type="email" value={email} onChange={(event) => setEmail(event.target.value)} disabled={submitting} required/>
            </div>
            <div>
                <label htmlFor={`${id}-text`}>Your comment</label>
                <textarea id={`${id}-text`} value={text} onChange={(event) => setText(event.target.value)} required rows="4" disabled={submitting}/>
            </div>
            <button type="submit" disabled={submitting}>Submit</button>
        </form>
    );
}

export default CommentForm;