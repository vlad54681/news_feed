import React from 'react';
import { Form, Field } from 'react-final-form';
import { composeValidators, maxLengthCreator, required } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './AddMessageForm.module.css';

const AddMessageForm = (props) => {
	let addNewPost = (newMessageBody) => {
		props.addPostActionCreator(newMessageBody)
	}
	// let addPost = () => {
	// 	props.dispatch(addPostActionCreator());
	// }
	return <Form onSubmit={addNewPost}>
		{props => (
			<form onSubmit={props.handleSubmit}>
				<div className={s.newMessageBlock}>
					<div className={s.message}>
						<Field
							component={Textarea}
							name='newMessageBody'
							placeholder='Enter your message'
							className={s.textarea}
							validate={composeValidators(required, maxLengthCreator(500))}
						/>
					</div>
					<div>
						<button className={s.button}>Send</button>
					</div>
				</div>
			</form>
		)}
	</Form>
}


export default AddMessageForm;
