export function isNumber (value) {
	return typeof value === 'number' && isFinite(value);
}

export function isString (value) {
	return typeof value === 'string' || value instanceof String;
}
