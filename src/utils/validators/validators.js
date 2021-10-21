export const required = (value) => (value ? undefined && 'Choose author' : "Required");

export const mustBeNumber = (value) => (isNaN(value) ? "Must be a number" : undefined);

export const minValue = (min) => (value) =>
	isNaN(value) || value >= min ? undefined : `Should be greater than ${min}`;


export const maxLengthCreator = (maxLength) => (value) => {
	if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
	return undefined;
}

export const composeValidators = (...validators) => (value) =>
	validators.reduce((error, validator) => error || validator(value), undefined);


