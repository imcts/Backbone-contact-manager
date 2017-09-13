import { Router } from 'backbone'
import { ROUTER, VIEW_FACTORY } from '../constants'
import viewFactory from '../factory'
import Contact from '../models/Contact'

export default class ContactRouter extends Router {
	constructor (options) {
		super({
			routes: {
				[ROUTER.NEW_CONTACT]: 'createContact',
				[ROUTER.EDIT_CONTACT]: 'editContact',
				[ROUTER.CONTACTS]: 'contacts',
				[ROUTER.DEFAULT]: 'contacts'
			}
		})

		this.appView = options.appView
		this.contacts = options.contacts
	}

	contacts () {
		this.updateAppView(VIEW_FACTORY.CONTACTS, { collection: this.contacts })
	}

	createContact () {
		this.updateAppView(VIEW_FACTORY.FORM, { collection: this.contacts, model: new Contact() })
	}

	editContact (id) {
		this.updateAppView(VIEW_FACTORY.FORM, { collection: this.contacts, model: this.contacts.get(id) })
	}

	updateAppView (type, options) {
		const view = viewFactory.create(type, options)
		this.appView.update(view)
	}
}
