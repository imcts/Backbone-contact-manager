import _ from 'underscore'
import { Model } from 'backbone'
import { isEmail } from '../utils/index'
import { CONTACT_FORM_VIEW, CONTACT_FOMR_ERROR_MESSAGE } from '../constants'

export default class Contact extends Model {
	defaults () {
		return {
			id: 0,
			name: '',
			email: '',
			phone: ''
		}
	}

	validate (attributes) {
		const { name, email, phone } = attributes
		const errors = []

		if (_.isEmpty(name)) {
			errors.push({
				className: CONTACT_FORM_VIEW.NAME_SELECTOR,
				message: CONTACT_FOMR_ERROR_MESSAGE.NAME
			})
		}

		if (!isEmail(email)) {
			errors.push({
				className: CONTACT_FORM_VIEW.EMAIL_SELECTOR,
				message: CONTACT_FOMR_ERROR_MESSAGE.EMAIL
			})
		}

		if (_.isEmpty(phone)) {
			errors.push({
				className: CONTACT_FORM_VIEW.PHONE_SELECTOR,
				message: CONTACT_FOMR_ERROR_MESSAGE.PHONE
			})
		}

		return errors.length ? errors : null
	}
}
