import s from './NewsFeed.module.css';

import { Field, Form } from 'react-final-form';
import { composeValidators, maxLengthCreator, required } from '../../utils/validators/validators';





const NewsPostCreator = ({ addNewPost, whatAuthor }) => {
	return <div className={s.newPostForm}>
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
							<div className={s.formField}>
								<select {...input}
									className={s.newPostAuthors}
								>
									<option defaultValue={null}></option>
									{whatAuthor}
								</select>
								<div className={s.error}>
									{meta.error && meta.touched && <span >{meta.error}</span>}
								</div>
							</div>
						)}
					</Field>

					<Field
						name={'newMessageTitle'}
						validate={composeValidators(required, maxLengthCreator(100))}
					>
						{({ input, meta }) => (
							<div className={s.formField}>
								<input {...input}
									placeholder="Enter title.."
									className={s.newPostTitle}
								/>
								<div className={s.error}>
									{meta.error && meta.touched && <span >{meta.error}</span>}
								</div>
							</div>
						)}
					</Field>

					<Field

						name={'newMessageBody'}
						validate={composeValidators(required, maxLengthCreator(2000))}
					>
						{({ input, meta }) => (
							<div className={s.formField}>
								<textarea {...input}
									placeholder="Enter message.."
									className={s.newPostText}
								/>
								<div className={s.error}>
									{meta.error && meta.touched && <span >{meta.error}</span>}
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
}

export default NewsPostCreator;