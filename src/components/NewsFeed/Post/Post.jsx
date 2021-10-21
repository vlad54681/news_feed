import { NavLink } from 'react-router-dom';
import s from './Post.module.css';


const Post = (props) => {
	let onDelete = () => {
		const result = confirm('Do you really want to delete the post?');
		if (result) {
			return props.deletePost(props.id)
		}
	}
	return (
		<div className={s.item}>
			<div>
				<NavLink to="/authors">{props.author}</NavLink>
			</div>
			<h3>{props.title}</h3>
			<div>{props.text}</div >
			{props.date}
			<div><button onClick={onDelete}>DELETE</button></div>
		</div >
	)
}

export default Post;