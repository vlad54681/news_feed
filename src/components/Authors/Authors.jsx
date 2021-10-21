import { NavLink } from 'react-router-dom';
import styles from './Authors.module.css'


const Authors = (props) => {
	return (<div>
		<div className={styles.postsBlock}>
			<NavLink to="/news"><h1 className={styles.postsBlock__title}>AUTHORS</h1></NavLink>
		</div>
		<div className={styles.authorsFeed}>
			{
				props.authors.map(author =>
					<div className={styles.itemContainer}>
						<ul className={styles.authorsBlock}>
							<li ><h3 className={styles.authorName}>{author.authorName}</h3></li>
							<li ><span className={styles.authorDesc}>Age:</span><span>{author.age}</span></li>
							<li ><span className={styles.authorDesc}>Birthday:</span><span>{author.birthday}</span></li>
							<li ><span className={styles.authorDesc}>Deathday:</span><span>{author.deathday}</span></li>
							<li ><span className={styles.authorDesc}>Location:</span><span>{author.city}, {author.country}</span></li>
							<li ><span className={styles.authorDesc}>Gender:</span><span>{author.gender}</span></li>
							<li ><span className={styles.authorDesc}>Marital status:</span><span>{author.civilStatus}</span></li>
							<li ><span className={styles.authorDesc}>Progession:</span><span>{author.profession}</span></li>
							<li ><span className={styles.authorDesc}>Education:</span><span>{author.education}</span></li>
							<li ><span className={styles.authorDesc}>Genres:</span><span>{author.genre}</span></li>
						</ul>
					</div>)
			}
		</div>
	</div>
	)
}

export default Authors;