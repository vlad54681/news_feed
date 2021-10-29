import { connect } from "react-redux";
import { setCurrentPost, editCurrentPost, getCurrentPost, filterPosts, deletePost, addPost, } from '../../redux/app-reducer';


import s from './NewsFeed.module.css';
import React, { useState } from 'react';
import { Field, Form } from 'react-final-form';
import Post from './Post/Post';
import NewsPostCreator from './NewsPostCreator';
import NewsPostEditor from './NewsPostEditor';


const NewsFeed = ({ setCurrentPost, editCurrentPost, getCurrentPost, filterPosts, deletePost, currentPost, posts, authors, addPost }) => {

	let [editMode, setEditMode] = useState(false);

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









	let whatAuthor = authors.map(a => <option key={a.id} value={a.authorName} >{a.authorName}</option>)
	let newsElements =
		posts.map(p => <Post key={p.id} getCurrentPost={getCurrentPost} setEditMode={setEditMode} deletePost={deletePost} id={p.id} title={p.title} text={p.text} author={p.author} date={p.date} />
		);

	return <div className={s.postsBlock}>
		<h1 className={s.postsBlock__title}>NEWS FEED</h1>
		<div >
			<div className={s.newPost}>
				{editMode
					?
					<NewsPostEditor setCurrentPost={setCurrentPost} currentPost={currentPost} editCurrentPost={editCurrentPost} setEditMode={setEditMode} posts={posts} whatAuthor={whatAuthor} />
					: <NewsPostCreator addNewPost={addNewPost} whatAuthor={whatAuthor} />}

			</div>
		</div>

		<div className={s.postsForm}>
			<div className={s.searchBlockContainer} >
				<Form
					onSubmit={filterPosts}
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

const mapStateToProps = (state) => {
	return {
		currentPost: state.appPage.currentPost,
		authors: state.appPage.authors,
		search: state.appPage.search,
		posts: state.appPage.posts,
		filteredPosts: state.appPage.filteredPosts,
	}
}

export default connect(mapStateToProps, { setCurrentPost, editCurrentPost, getCurrentPost, filterPosts, deletePost, addPost })(NewsFeed);
