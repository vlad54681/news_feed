import s from './NewsFeed.module.css';
import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import Post from './Post/Post';
import NewsPostCreator from './NewsPostCreator';
import NewsPostEditor from './NewsPostEditor';


const NewsFeed = ({ filterPosts, filterFilteredPosts, filteredPosts, editPost, deletePost, posts, setFilteredPosts, search, authors, setSearch, addPost }) => {

	let [editMode, setEditMode] = useState(false);

	let onSearch = (search) => {
		filterPosts(search);
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


	let onDeletePost = (id) => {
		return deletePost(posts.filter(p => p.id != id))
	}






	let whatAuthor = authors.map(a => <option value={a.authorName} >{a.authorName}</option>)
	let newsElements =
		posts.map(p => <Post goToEditMode={() => { setEditMode(true) }} posts={posts} onDeletePost={onDeletePost} id={p.id} title={p.title} text={p.text} author={p.author} date={p.date} />
		);

	return <div className={s.postsBlock}>
		<h1 className={s.postsBlock__title}>NEWS FEED</h1>
		<div >
			<div className={s.newPost}>
				{editMode
					?
					<NewsPostEditor setFilteredPosts={setFilteredPosts} editPost={editPost} setEditMode={setEditMode} posts={posts} whatAuthor={whatAuthor} />
					: <NewsPostCreator addNewPost={addNewPost} whatAuthor={whatAuthor} />}

			</div>
		</div>

		<div className={s.postsForm}>
			<div className={s.searchBlockContainer} >
				<Form
					onSubmit={onSearch}
					render={({ handleSubmit }) => (
						<form
							className={s.searchBlock}
							onSubmit={handleSubmit}
						>
							<button className={s.searchButton} type={'submit'}

							>SEARCH</button>

							<Field
								name={'searchField'}
							>
								{({ input, value }) => (
									<div className={s.searchField}>
										<input {...input}
											value={value}



										/>
									</div>
								)}
							</Field>

						</form>
					)}
				/>
			</div>

			{newsElements}

		</div>
	</div >
}



export default NewsFeed;





