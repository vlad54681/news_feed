import { NavLink } from 'react-router-dom';
import styles from './Authors.module.css'


const Authors = ({ сurrentAuthor }) => {
	return (<div className={styles.authorsPageContainer}>
		<div className={styles.authorsPageHeader}>
			<div className={styles.postsBlock}>
				<h1 className={styles.postsBlock__title}>AUTHORS</h1>
			</div>
			<div className={styles.backToNewsfeed}><NavLink to="/news">BACK TO NEWSFEED</NavLink></div>
		</div>
		<div className={styles.authorsFeed}>

			<div className={styles.itemContainer}>
				<ul className={styles.authorsBlock}>
					<li ><h3 className={styles.authorName}>{сurrentAuthor.authorName}</h3></li>
					<li ><span className={styles.authorDesc}>Age:</span><span>{сurrentAuthor.age}</span></li>
					<li ><span className={styles.authorDesc}>Birthday:</span><span>{сurrentAuthor.birthday}</span></li>
					<li ><span className={styles.authorDesc}>Deathday:</span><span>{сurrentAuthor.deathday}</span></li>
					<li ><span className={styles.authorDesc}>Location:</span><span>{сurrentAuthor.city}, {сurrentAuthor.country}</span></li>
					<li ><span className={styles.authorDesc}>Gender:</span><span>{сurrentAuthor.gender}</span></li>
					<li ><span className={styles.authorDesc}>Marital status:</span><span>{сurrentAuthor.civilStatus}</span></li>
					<li ><span className={styles.authorDesc}>Progession:</span><span>{сurrentAuthor.profession}</span></li>
					<li ><span className={styles.authorDesc}>Education:</span><span>{сurrentAuthor.education}</span></li>
					<li ><span className={styles.authorDesc}>Genres:</span><span>{сurrentAuthor.genre}</span></li>
				</ul>
			</div>
		</div>
	</div>
	)
}

export default Authors;