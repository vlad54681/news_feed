import { NavLink } from 'react-router-dom';
import s from './Post.module.css';


const Post = ({ getCurrentPost, setEditMode, deletePost, id, author, title, text, date }) => {
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

	return (
		<div className={s.item}>
			<div className={s.author}>
				<NavLink to="/authors">{author}</NavLink>
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
				<button className={s.button} onClick={goToEditMode}>EDIT</button>
				<button className={s.button + ' ' + s.deleteButton} onClick={onDelete}>DELETE</button>

			</div>
		</div >
	)
}

export default Post;