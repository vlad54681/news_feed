const ADD_POST = 'ADD_POST';
const SET_SEARCH = 'SET_SEARCH';
const SET_FILTERED_POSTS = 'SET_FILTERED_POSTS';
const DELETE_POST = 'DELETE_POST';


let initialState = {
	posts: [
	],

	authors: [
		{

			id: 1,
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
		},

		{

			id: 2,
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
		},

		{

			id: 3,
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
		},

		{

			id: 4,
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
		},

		{

			id: 5,
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
		},

		{

			id: 6,
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
		},


		{
			id: 7,
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
		},

		{
			id: 8,
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
		},

		{
			id: 9,
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
		},

		{

			id: 10,
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
		},
	],
	search: '',

}

const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let newPost = {
				id: state.posts.length + 1,
				author: action.newMessageAuthor,
				title: action.newMessageTitle,
				text: action.newMessageBody,
				date: action.mewMessageDate,

			};
			return {
				...state,
				posts: [...state.posts, newPost],

			}
		case SET_FILTERED_POSTS: {
			return { ...state, posts: action.posts }
		}
		case DELETE_POST: {
			return { ...state, posts: state.posts.filter(p => p.id != action.id) }
		}
		case SET_SEARCH: {
			return { ...state, search: action.search }
		}
		default:
			return state;
	}
}

export const setSearch = (search) => ({ type: SET_SEARCH, search })
export const setFilteredPosts = (posts) => ({ type: SET_FILTERED_POSTS, posts })
export const deletePost = (id) => ({ type: DELETE_POST, id })

export const addPost = (newMessageBody, newMessageTitle, newMessageAuthor, mewMessageDate) => {
	return { type: ADD_POST, newMessageBody, newMessageTitle, newMessageAuthor, mewMessageDate }
}

export default appReducer;