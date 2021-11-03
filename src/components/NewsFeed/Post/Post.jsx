import { NavLink } from 'react-router-dom';
import s from './Post.module.css';


const Post = ({ editMode, setCurrentAuthor, getCurrentPost, setEditMode, deletePost, id, author, title, text, date }) => {
	let onDelete = () => {
		const result = confirm('Do you really want to delete the post?');
		if (result) {

			deletePost(id);
		}
	}
	let goToEditMode = () => {

		getCurrentPost(id, text, title, author, date)
		setEditMode(true)
	}
	let showCurrentAuthor = () => {
		setCurrentAuthor(author)
	}
	return (
		<div className={s.item}>
			<div className={s.author}>
				<NavLink onClick={showCurrentAuthor} to="/authors">{author}</NavLink>
			</div>
			<div className={s.title}>
				<h3>{title}</h3>
			</div>
			<div className={s.text}>
				{text}
			</div >
			<div className={s.date}>
				{date}
			</div>
			<div className={s.buttons}>
				<button className={s.button} disabled={editMode == true} onClick={goToEditMode}>EDIT</button>
				<button className={s.button + ' ' + s.deleteButton} disabled={editMode == true} onClick={onDelete}>DELETE</button>

			</div>
		</div >
	)
}

export default Post;