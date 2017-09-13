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
		if (this.isAdded()) {
			this.moveToHome()
		}
	}

	clearError () {
		this.$contens.removeClass(CONTACT_FORM_VIEW.ERROR_CLASS_NAME)
		this.$helps.text('')
	}

	isAdded () {
		const errors = this.addContact()
		if (errors) {
			this.reportError(errors)
			return false
		}
		return true
	}

	addContact () {
		const newContact = this.collection.create({ id: this.makeNewId(), ...this.getAttributes() }, { wait: true })
		return newContact.validationError
	}

	getAttributes () {
		return {
			name: this.$name.val(),
			email: this.$email.val(),
			phone: this.$phone.val()
		}
	}

	makeNewId () {
		if (this.collection.isEmpty()) {
			return 0
		}
		const ids = this.collection.pluck('id')
		const lastestId = _.max(ids)
		return lastestId + 1
	}

	reportError (errors) {
		errors.forEach(this.drawError, this)
	}

	drawError (error, index) {
		this
			.$(error.className)
			.addClass(CONTACT_FORM_VIEW.ERROR_CLASS_NAME)
			.find(CONTACT_FORM_VIEW.HELP_SELECTOR)
			.text(error.message)
	}

	modify () {
		this.clearError()
		if (this.isModified()) {
			this.moveToHome()
		}
	}

	isModified () {
		const isError = this.modifyModel()
		if (isError) {
			this.reportError(this.model.validationError)
			return false
		}
		return true
	}

	modifyContact () {
		this.modifyModel()
		this.moveToHome()
	}

	modifyModel () {
		return !this.model.save(this.getAttributes(), { wait: true })
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
