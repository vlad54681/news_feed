import { Field, Form } from "react-final-form"
import s from './NewsFeed.module.css';


const SearchForm = ({ filterPosts }) => {
	return <div className={s.searchBlockContainer} >
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
}

export default SearchForm;