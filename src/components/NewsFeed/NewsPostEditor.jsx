import s from './NewsFeed.module.css';
import { Field, Form } from 'react-final-form';

const NewsPostEditor = ({ setCurrentPost, editCurrentPost, currentPost, setEditMode, posts, whatAuthor }) => {


	let onEditPost = (handleSubmit) => {
		editCurrentPost(handleSubmit.newMessageBody, handleSubmit.newMessageTitle, handleSubmit.newMessageAuthor)
		let currentId = posts.map(function (e) { return e.id; }).indexOf(currentPost.id);
		setCurrentPost(currentId);
		setEditMode(false)
	}



	return <div className={s.newPostForm}>
		<Form
			onSubmit={onEditPost}
			initialValues={{ newMessageAuthor: null }}
			render={({ handleSubmit }) => (
				<form
					onSubmit={event => {
						handleSubmit(event);
					}}
				>
					<Field
						name={'newMessageAuthor'}
					>
						{({ input, meta }) => (
							<div className={s.formField}>
								<select {...input}
									className={s.newPostAuthors}
								>
									<option defaultValue={null}></option>
									{whatAuthor}
								</select>
								<div className={s.error}>
								</div>
							</div>
						)}
					</Field>
					<Field
						name={'newMessageTitle'}
					>
						{({ input, meta }) => (
							<div className={s.formField}>
								<input {...input}
									placeholder="Enter title.."
									className={s.newPostTitle}
								/>
								<span className={s.error}>
								</span>
							</div>
						)}
					</Field>
					<Field
						name={'newMessageBody'}
					>
						{({ input, meta }) => (
							<div className={s.formField}>
								<textarea {...input}
									placeholder="Enter message.."
									className={s.newPostText}
								/>
								<div className={s.error}>
								</div>
							</div>
						)}
					</Field>
					<div>
						<button type={'submit'}
							className={s.newPostButton}>Save</button>
					</div>
				</form>
			)}
		/>
	</div>
}

export default NewsPostEditor;