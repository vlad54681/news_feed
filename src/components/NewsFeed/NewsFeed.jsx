import { connect } from "react-redux";
import { setCurrentAuthor, setCurrentPost, editCurrentPost, getCurrentPost, filterPosts, deletePost, addPost, } from '../../store/app-reducer';
import s from './NewsFeed.module.css';
import React, { useState } from 'react';
import Post from './Post/Post';
import NewsPostCreator from './NewsPostCreator';
import NewsPostEditor from './NewsPostEditor';
import SearchForm from "./SearchForm";
import arrowUp from '../../assets/img/icons/arrowUp.png';
import arrowDown from '../../assets/img/icons/arrowDown.png';

const NewsFeed = ({ setCurrentAuthor, setCurrentPost, editCurrentPost, getCurrentPost, filterPosts, deletePost, currentPost, posts, authors, addPost }) => {

	let [editMode, setEditMode] = useState(false);
	let [sortPosts, setSortPosts] = useState(false);


	const onSort = (sortingItems) => {

		if (sortPosts == false) {
			posts.sort(function (a, b) {
				let elem1 = a[sortingItems].toLowerCase()
				let elem2 = b[sortingItems].toLowerCase()
				if (elem1 < elem2)
					return -1
				if (elem1 > elem2)
					return 1
				return 0
			})
			setSortPosts(true)
		} else {
			posts.sort(function (a, b) {
				let elem1 = a[sortingItems].toLowerCase()
				let elem2 = b[sortingItems].toLowerCase()
				if (elem1 > elem2)
					return -1
				if (elem1 < elem2)
					return 1
				return 0
			})
			setSortPosts(false)
		}
	}
	let onSortByText = () => {
		onSort('text')
	}
	let onSortByTitle = () => {
		onSort('title')
	}
	let onSortByAuthor = () => {
		onSort('author')
	}

	let whatDate = () => {
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

		return time();
	}

	let addNewPost = async values => {
		addPost(values.newMessageBody, values.newMessageTitle, values.newMessageAuthor, whatDate())
	}

	let whatAuthor = authors.map(a => <option key={a.id} value={a.authorName} >{a.authorName}</option>)

	let newsElements =
		posts.map(p => <Post editMode={editMode} setCurrentAuthor={setCurrentAuthor} key={p.id} getCurrentPost={getCurrentPost} setEditMode={setEditMode} deletePost={deletePost} id={p.id} title={p.title} text={p.text} author={p.author} date={p.date} />
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
			<SearchForm filterPosts={filterPosts} />
			<div className={s.sortBlock}>
				<p className={s.sortTitle}>Sorting: </p>
				<div className={s.sortButtonContainer}><button className={s.sortButton} onClick={onSortByText}>by text</button><img className={s.sortArrow} src={sortPosts == true ? arrowDown : arrowUp} alt="" /></div>
				<div className={s.sortButtonContainer}><button className={s.sortButton} onClick={onSortByTitle}>by title</button><img className={s.sortArrow} src={sortPosts == true ? arrowDown : arrowUp} alt="" /></div>
				<div className={s.sortButtonContainer}><button className={s.sortButton} onClick={onSortByAuthor}>by author</button><img className={s.sortArrow} src={sortPosts == true ? arrowDown : arrowUp} alt="" /></div>
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

export default connect(mapStateToProps, {
	setCurrentAuthor, setCurrentPost, editCurrentPost, getCurrentPost, filterPosts, deletePost, addPost
})(NewsFeed);
