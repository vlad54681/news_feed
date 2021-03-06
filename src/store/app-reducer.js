const ADD_POST = 'ADD_POST';
const SET_SEARCH = 'SET_SEARCH';
const DELETE_POST = 'DELETE_POST';
const EDIT_POST = 'EDIT_POST';
const SET_FILTERED_POSTS = 'SET_FILTERED_POSTS';
const FILTERED_POSTS = 'FILTERED_POSTS';
const SET_POSTS = 'SET_POSTS';
const GET_CURRENT_POST = 'SET_CURRENT_POST';
const EDIT_CURRENT_POST = 'EDIT_CURRENT_POST';
const SET_UPDATES_POSTS = 'SET_UPDATES_POSTS';
const GET_CURRENT_AUTHOR = 'GET_CURRENT_AUTHOR';


let initialState = {
	posts: [],
	filteredPosts: '',
	authors: [
		{

			authorName: 'Petro Dostoevski',
			age: '36',
			birthday: '01/03/1869',
			deathday: '06/07/1905',
			country: 'USA',
			city: 'Los Angeles',
			gender: 'male',
			civilStatus: 'married',
			profession: "author, philanthropist",
			education: 'Emory University',
			genre: 'detective fiction, crime',
			id: 1,
		},

		{

			authorName: 'Serge Pushkin',
			age: '33',
			birthday: '09/05/1869',
			deathday: '06/04/1902',
			country: 'USA',
			city: 'Phoenix',
			gender: 'male',
			civilStatus: 'unmarried',
			profession: "author, philanthropist",
			education: 'University of Iowa',
			genre: 'romantic novel, distopia',
			id: 2,
		},

		{

			authorName: 'Lion Fatty',
			age: '56',
			birthday: '09/23/1801',
			deathday: '06/04/1857',
			country: 'UK',
			city: 'Stirling',
			gender: 'male',
			civilStatus: 'unmarried',
			profession: "author, philanthropist",
			education: 'Oberlin College',
			genre: 'fantasy, cyberpunk',
			id: 3,
		},

		{

			authorName: 'Charles Dickens',
			age: '22',
			birthday: '09/23/1992',
			deathday: '06/04/2014',
			country: 'USA',
			city: 'San Antonio',
			gender: 'male',
			civilStatus: 'unmarried',
			profession: "author, philanthropist",
			education: 'Brown University',
			genre: 'post-apocalyptic, crime',
			id: 4,
		},

		{

			authorName: 'Victor Hugo',
			age: '30',
			birthday: '09/21/1811',
			deathday: '02/06/1841',
			country: 'UK',
			city: 'Truro',
			gender: 'male',
			civilStatus: 'unmarried',
			profession: "author, philanthropist",
			education: 'Emory University',
			genre: 'fantasy, distopia',
			id: 5,
		},

		{

			authorName: 'Alexandre Dumas',
			age: '56',
			birthday: '02/23/1889',
			deathday: '09/02/1945',
			country: 'USA',
			city: 'Chicago',
			gender: 'male',
			civilStatus: 'married',
			profession: "author, philanthropist",
			education: 'Oberlin College',
			genre: 'fantasy',
			id: 6,
		},


		{
			authorName: 'Honore de Balzac',
			age: '33',
			birthday: '06/13/1821',
			deathday: '03/08/1854',
			country: 'UK',
			city: 'Salisbury',
			gender: 'male',
			civilStatus: 'unmarried',
			profession: "cuthor, philanthropist",
			education: 'Hamilton College',
			genre: 'cyberpunk',
			id: 7,
		},

		{
			authorName: 'Samuel Johnson',
			age: '26',
			birthday: '01/30/1831',
			deathday: '06/04/1857',
			country: 'USA',
			city: 'Houston',
			gender: 'male',
			civilStatus: 'married',
			profession: "author, philanthropist",
			education: 'University of Iowa',
			genre: 'romantic novel, crime',
			id: 8,
		},

		{
			authorName: 'Jonathan Swift ',
			age: '56',
			birthday: '02/28/1901',
			deathday: '06/04/1957',
			country: 'UK',
			city: 'stirling',
			gender: 'male',
			civilStatus: 'married',
			profession: "author, philanthropist",
			education: 'Emory University',
			genre: 'romantic novel',
			id: 9,
		},

		{

			authorName: 'William Shakespeare',
			age: '50',
			birthday: '09/23/1801',
			deathday: '06/04/1851',
			country: 'UK',
			city: 'Portsmouth',
			gender: 'male',
			civilStatus: 'unmarried',
			profession: "author, philanthropist",
			education: 'Brown University',
			genre: 'distopia, post-apocalyptic',
			id: 10,
		},
	],
	search: '',
	currentPost: {},
	??urrentAuthor: {},

}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let allvalues = Object.keys(state.posts).map(function (key) { return state.posts[key].id + 1; });
			let newPost = {
				id: state.posts.length == 0 ? 1
					: Math.max.apply(null, allvalues),
				author: action.newMessageAuthor,
				title: action.newMessageTitle,
				text: action.newMessageBody,
				date: action.mewMessageDate,

			};
			return {
				...state,
				posts: [...state.posts, newPost],

			}
		case FILTERED_POSTS: {

			return {
				...state,
				posts: action.posts
			}
		}
		case SET_FILTERED_POSTS: {
			let initialPosts = state.posts;
			return {
				...state,
				filteredPosts: initialPosts
			}
		}
		case SET_POSTS: {
			let initialFilteredPosts = state.filteredPosts;
			return {
				...state,
				posts: initialFilteredPosts
			}
		}
		case GET_CURRENT_POST: {
			let newCurrentPost = {
				id: action.newMessegaId,
				author: action.newMessageAuthor,
				title: action.newMessageTitle,
				text: action.newMessageBody,
				date: action.mewMessageDate,
			}
			return {
				...state,
				currentPost: newCurrentPost
			}
		}
		case EDIT_CURRENT_POST: {
			let newCurrentPost = {
				id: state.currentPost.id,
				text: action.newMessageBody,
				title: action.newMessageTitle,
				author: action.newMessageAuthor,
				date: state.currentPost.date,

			};
			return {
				...state,
				currentPost: newCurrentPost
			}
		}
		case DELETE_POST: {

			return { ...state, posts: state.posts.filter(p => p.id != action.id) }
		}
		case EDIT_POST: {
			return { ...state, posts: action.posts }
		}
		case SET_SEARCH: {
			return { ...state, search: action.search }
		}
		case SET_UPDATES_POSTS: {
			return {
				...state,
				posts: action.posts
			}
		}
		case GET_CURRENT_AUTHOR: {
			let newCurrentAuthor = {
				authorName: action.currentAurhorName,
				age: action.currentAurhorAge,
				birthday: action.currentAurhorBirthday,
				deathday: action.currentAurhorDeathday,
				country: action.currentAurhorCountry,
				city: action.currentAurhorCity,
				gender: action.currentAurhorGender,
				civilStatus: action.currentAurhorCivilStatus,
				profession: action.currentAurhorProfession,
				education: action.currentAurhorEducation,
				genre: action.currentAurhorGenre,
			}
			return {
				...state,
				??urrentAuthor: newCurrentAuthor,

			}
		}
		default:
			return state;
	}
}

export const setUpdatesPosts = (posts) => ({ type: SET_UPDATES_POSTS, posts })
export const setPosts = (posts) => ({ type: SET_POSTS, posts })
export const setFilteredPosts = (filteredPosts) => ({ type: SET_FILTERED_POSTS, filteredPosts })
export const onFilterPosts = (posts) => ({ type: FILTERED_POSTS, posts })
export const deletePost = (id) => ({ type: DELETE_POST, id })
export const editPost = (posts) => ({ type: EDIT_POST, posts })
export const setSearch = (search) => ({ type: SET_SEARCH, search })
export const addPost = (newMessageBody, newMessageTitle, newMessageAuthor, mewMessageDate) => {
	return { type: ADD_POST, newMessageBody, newMessageTitle, newMessageAuthor, mewMessageDate }
}
export const getCurrentPost = (newMessegaId, newMessageBody, newMessageTitle, newMessageAuthor, mewMessageDate) => {
	return { type: GET_CURRENT_POST, newMessegaId, newMessageBody, newMessageTitle, newMessageAuthor, mewMessageDate }
}
export const getCurrentAuthor = (currentAurhorName, currentAurhorAge, currentAurhorBirthday,
	currentAurhorDeathday, currentAurhorCountry, currentAurhorCity, currentAurhorGender, currentAurhorCivilStatus,
	currentAurhorProfession, currentAurhorEducation, currentAurhorGenre) => {
	return {
		type: GET_CURRENT_AUTHOR,
		currentAurhorName, currentAurhorAge, currentAurhorBirthday,
		currentAurhorDeathday, currentAurhorCountry, currentAurhorCity, currentAurhorGender, currentAurhorCivilStatus,
		currentAurhorProfession, currentAurhorEducation, currentAurhorGenre
	}
}
export const editCurrentPost = (newMessageBody, newMessageTitle, newMessageAuthor) => {
	return { type: EDIT_CURRENT_POST, newMessageBody, newMessageTitle, newMessageAuthor }
}


export const filterPosts = (search) => async (dispatch, getState) => {
	dispatch(setSearch(search.searchField));
	let filteringPosts = getState().appPage.filteredPosts;
	let initialPosts = getState().appPage.posts;
	if (initialPosts.length >= filteringPosts.length) {
		dispatch(setFilteredPosts());
	} else if (filteringPosts.length > initialPosts.length) {
		dispatch(setPosts())
	}
	let stateSearch = getState().appPage.search;
	if (!stateSearch) {
		return initialPosts
	} else {
		let returnedPosts = getState().appPage.posts;
		return dispatch(onFilterPosts(returnedPosts.filter(item => {
			return item['title'].toLowerCase().includes(search.searchField.toLowerCase())
				|| item['text'].toLowerCase().includes(search.searchField.toLowerCase())
				|| item['author'].toLowerCase().includes(search.searchField.toLowerCase())
				|| item['date'].toLowerCase().includes(search.searchField.toLowerCase())
		})))
	}
}

export const setCurrentPost = (pos) => async (dispatch, getState) => {
	let gottenCurrentPost = getState().appPage.currentPost;
	let updatesPosts = getState().appPage.posts;
	updatesPosts.splice([pos], 1, {
		title: gottenCurrentPost.title == null ? updatesPosts[pos].title : gottenCurrentPost.title,
		text: gottenCurrentPost.text == null ? updatesPosts[pos].text : gottenCurrentPost.text,
		author: gottenCurrentPost.author == null ? updatesPosts[pos].author : gottenCurrentPost.author,
		date: gottenCurrentPost.date ? updatesPosts[pos].date : gottenCurrentPost.date,
		id: gottenCurrentPost.id,
	});
	dispatch(setUpdatesPosts(updatesPosts))
}
export const setCurrentAuthor = (authorName) => async (dispatch, getState) => {
	let authors = getState().appPage.authors;
	let currentAuthor = authors.find(item => item.authorName == authorName);
	dispatch(getCurrentAuthor(currentAuthor.authorName,
		currentAuthor.age,
		currentAuthor.birthday,
		currentAuthor.deathday,
		currentAuthor.country,
		currentAuthor.city,
		currentAuthor.gender,
		currentAuthor.civilStatus,
		currentAuthor.profession,
		currentAuthor.education,
		currentAuthor.genre))
}

export default appReducer;
