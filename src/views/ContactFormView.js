import _ from 'underscore'
import ContactFormTemplate from '../templates/ContactFormTemplate'
import { View } from 'backbone'
import { CONTACT_FORM_VIEW, ROUTER } from '../constants/index'

export default class ContactForm extends View {
	constructor (options) {
		super({
			events: {
				'click ._submit': 'submit',
				'click ._modify': 'modify',
				'click ._cancel': 'moveToHome'
			},
			...options
		})
	}

	submit () {
		this.clearError()
		if (this.isValid()) {
			this.addContact()
		}
	}

	clearError () {
		this.$contens.removeClass(CONTACT_FORM_VIEW.ERROR_CLASS_NAME)
		this.$helps.text('')
	}

	isValid () {
		const attributes = this.getAttributes()
		const errors = this.model.validate(attributes)
		if (errors) {
			errors.forEach(this.reportError, this)
			return false
		}
		return true
	}

	getAttributes () {
		return {
			name: this.$name.val(),
			email: this.$email.val(),
			phone: this.$phone.val()
		}
	}

	reportError (error, index) {
		this
			.$(error.className)
			.addClass(CONTACT_FORM_VIEW.ERROR_CLASS_NAME)
			.find(CONTACT_FORM_VIEW.HELP_SELECTOR)
			.text(error.message)
	}

	addContact () {
		this.makeNewModel()
		this.moveToHome()
	}

	makeNewModel () {
		this.collection.create({
			id: this.makeNewId(),
			name: this.$name.val(),
			email: this.$email.val(),
			phone: this.$phone.val()
		})
	}

	makeNewId () {
		if (this.collection.isEmpty()) {
			return 0
		}
		const ids = this.collection.pluck('id')
		const lastestId = _.max(ids)
		return lastestId + 1
	}

	modify () {
		this.clearError()
		if (this.isValid()) {
			this.modifyContact()
		}
	}

	modifyContact () {
		this.modifyModel()
		this.moveToHome()
	}

	modifyModel () {
		this.model.save({
			name: this.$name.val(),
			email: this.$email.val(),
			phone: this.$phone.val()
		})
	}

	moveToHome () {
		Backbone.history.navigate(ROUTER.CONTACTS, true)
	}

	initialize () {
		this.render()
		this.setDomCache()
	}

	render () {
		this.$el.html(ContactFormTemplate(this.model.toJSON()))
	}

	setDomCache () {
		this.$helps = this.$(CONTACT_FORM_VIEW.HELP_SELECTOR)
		this.$contens = this.$(CONTACT_FORM_VIEW.CONTENTS_SELECTOR)
		this.$name = this.$(CONTACT_FORM_VIEW.INPUT_NAME_SELECTOR)
		this.$email = this.$(CONTACT_FORM_VIEW.INPUT_EMAIL_SELECTOR)
		this.$phone = this.$(CONTACT_FORM_VIEW.INPUT_PHONE_SELECTOR)
	}
}
