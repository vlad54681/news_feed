import s from './NewsFeed.module.css';
import React from 'react';
import { Field, Form } from 'react-final-form';
import { composeValidators, maxLengthCreator, required } from '../../utils/validators/validators';
import { NavLink } from 'react-router-dom';
import Post from './Post/Post';


const NewsFeed = ({ deletePost, posts, setFilteredPosts, search, authors, setSearch, addPost }) => {

	let onSearch = (search) => {
		setSearch(search);
		if (!search) {
			return posts
		}
		return setFilteredPosts(posts.filter(item => {
			return item['title'].toLowerCase().includes(search.searchField.toLowerCase())
				|| item['text'].toLowerCase().includes(search.searchField.toLowerCase())
				|| item['author'].toLowerCase().includes(search.searchField.toLowerCase())
				|| item['date'].toLowerCase().includes(search.searchField.toLowerCase())
		}))
	}


	let now = new Date();
	let options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	};
	let time = () => {
		return now.toLocaleString("en-US", options)
	}
	let mewMessageDate = time();

	let addNewPost = async values => {
		addPost(values.newMessageBody, values.newMessageTitle, values.newMessageAuthor, mewMessageDate)
	}

	let whatAuthor = authors.map(a => <option value={a.authorName} >{a.authorName}</option>)
	let newsElements =
		posts.map(p => <Post posts={posts} deletePost={deletePost} id={p.id} title={p.title} text={p.text} author={p.author} date={p.date} />
		);

	return <div className={s.postsBlock}>
		<h1 className={s.postsBlock__title}>NEWS FEED</h1>
		<div >
			<div className={s.newPost}>
				<div className={s.newPostForm}>
					<Form
						onSubmit={addNewPost}
						initialValues={{ newMessageAuthor: null }}
						render={({ handleSubmit, form, hasValidationErrors }) => (
							<form
								onSubmit={event => {
									handleSubmit(event).then(form.reset);
								}}
							>
								<Field
									name={'newMessageAuthor'}
									validate={required}
								>
									{({ input, meta }) => (
										<div classname={s.formField}>
											<select {...input}
												className={s.newPostAuthors}
											>
												<option selected value={null}></option>
												{whatAuthor}
											</select>
											<div className={s.error}>
												{meta.error && meta.touched && <span>{meta.error}</span>}
											</div>
										</div>
									)}
								</Field>
								<Field
									name={'newMessageTitle'}
									validate={composeValidators(required, maxLengthCreator(100))}
								>
									{({ input, meta }) => (
										<div classname={s.formField}>
											<input {...input}
												placeholder="Enter title.."
												className={s.newPostTitle}
											/>
											<span className={s.error}>
												{meta.error && meta.touched && <span>{meta.error}</span>}
											</span>
										</div>
									)}
								</Field>
								<Field
									name={'newMessageBody'}
									validate={composeValidators(required, maxLengthCreator(500))}
								>
									{({ input, meta }) => (
										<div classname={s.formField}>
											<textarea {...input}
												placeholder="Enter message.."
												className={s.newPostText}
											/>
											<div className={s.error}>
												{meta.error && meta.touched && <span>{meta.error}</span>}
											</div>
										</div>
									)}
								</Field>
								<div>
									<button type={'submit'}
										className={s.newPostButton}
										disabled={hasValidationErrors}>Add post</button>
								</div>
							</form>
						)}
					/>
				</div>
				<Form

					onSubmit={onSearch}
					render={({ handleSubmit }) => (
						<form
							onSubmit={handleSubmit}
						>
							<button type={'submit'}

							>SEARCH</button>
							<Field
								name={'searchField'}
							>
								{({ input, value }) => (
									<div classname={s.formField}>
										<input {...input}
											value={value}

											placeholder="Search.."
											className={s.newPostTitle}
										/>
									</div>
								)}
							</Field>
						</form>
					)}
				/>
				{newsElements}
			</div>
		</div>
	</div >
}



export default NewsFeed;





