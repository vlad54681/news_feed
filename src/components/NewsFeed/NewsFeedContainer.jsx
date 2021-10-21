import NewsFeed from './NewsFeed';
import { connect } from "react-redux";
import { deletePost, addPost, setSearch, setFilteredPosts } from '../../redux/app-reducer';


const mapStateToProps = (state) => {
	return {
		authors: state.appPage.authors,
		search: state.appPage.search,
		posts: state.appPage.posts,
	}
}

export default connect(mapStateToProps, { deletePost, setFilteredPosts, addPost, setSearch })(NewsFeed);
