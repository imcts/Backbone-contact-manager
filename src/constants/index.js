export const ROUTER = {
	DEFAULT: '*path',
	CONTACTS: 'contact',
	NEW_CONTACT: 'new',
	EDIT_CONTACT: 'edit/:id'
}

export const VIEW_FACTORY = {
	CONTACTS: 'CONTATCS',
	CONTACT: 'CONTACT',
	FORM: 'FORM'
}

export const CONTACTS = {
	LOCAL_STORAGE: 'dolen'
}

export const APP_VIEW = {
	DEFAULT_SELECTOR: '._app',
	CONTENTS_SELECTOR: '._contents'
}

export const CONTACTS_VIEW = {
	CONTENTS_SELECTOR: '._contacts-content',
	SEARCH_SELECTOR: '._search',
	EMPTY_CONTACTS_SELECTOR: '._no-contacts',
	EMPTY_SEARCH_CONTACTS_SELECTOR: '._no-search'
}

export const CONTACT_FORM_VIEW = {
	CONTENTS_SELECTOR: '._contents',
	HELP_SELECTOR: '._help',
	NAME_SELECTOR: '._name',
	EMAIL_SELECTOR: '._email',
	PHONE_SELECTOR: '._phone',
	INPUT_NAME_SELECTOR: '._input-name',
	INPUT_EMAIL_SELECTOR: '._input-email',
	INPUT_PHONE_SELECTOR: '._input-phone',
	ERROR_CLASS_NAME: 'has-error'
}

export const CONTACT_FOMR_ERROR_MESSAGE = {
	NAME: 'name is required',
	EMAIL: 'enter an email format',
	PHONE: 'phone is required'
}

export const CONTACT_VIEW = {
	TAG_NAME: 'li',
	CLASS_NAME: 'media col-md-3 col-sm-4',
	DELETE_CONFIRM: 'Do you wanna delete contact?'
}
