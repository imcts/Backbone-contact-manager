import _ from 'underscore'
import { View } from 'backbone'
import { VIEW_FACTORY, CONTACTS_VIEW } from '../constants/index'
import ContactsTemplate from '../templates/ContactsTemplate'
import emptyContactsTemplate from '../templates/emptyContactsTemplate'
import emptySearchContactsTemplate from '../templates/emptySearchContactsTemplate'
import viewFactory from '../factory'

export default class ContactsView extends View {
	constructor (options) {
		super({
			events: {
				'keyup ._search': 'search'
			},
			...options
		})
	}

	search (e) {
		const searchWord = this.$search.val().trim()
		if (searchWord) {
			this.clearContents()
			this.searchContacts(searchWord)
		} else {
			this.drawContacts()
		}
	}

	searchContacts (searchWord) {
		const contacts = this.collection.search(searchWord)
		if (_.isEmpty(contacts)) {
			this.drawEmptySearchContacts(searchWord)
		} else {
			this.drawSearchContacts(contacts)
		}
	}

	drawEmptySearchContacts (seachWord) {
		this.$emptySearchContacts.html(emptySearchContactsTemplate({ seachWord }))
	}

	drawSearchContacts (contacts) {
		contacts.forEach(this.drawContact, this)
	}

	initialize () {
		this.render()
		this.setDomCache()
		this.drawContacts()
	}

	render () {
		this.$el.html(ContactsTemplate())
	}

	setDomCache () {
		this.$contents = this.$(CONTACTS_VIEW.CONTENTS_SELECTOR)
		this.$search = this.$(CONTACTS_VIEW.SEARCH_SELECTOR)
		this.$emptyContacts = this.$(CONTACTS_VIEW.EMPTY_CONTACTS_SELECTOR)
		this.$emptySearchContacts = this.$(CONTACTS_VIEW.EMPTY_SEARCH_CONTACTS_SELECTOR)
	}

	drawContacts () {
		this.clearContents()
		if (this.collection.length) {
			this.collection.forEach(this.drawContact, this)
		} else {
			this.drawEmptyContacts()
		}
	}

	drawEmptyContacts () {
		this.$emptyContacts.html(emptyContactsTemplate())
	}

	clearContents () {
		this.$contents.empty()
		this.$emptyContacts.empty()
		this.$emptySearchContacts.empty()
	}

	drawContact (model, index, collection) {
		const contactView = viewFactory.create(VIEW_FACTORY.CONTACT, { collection, model })
		this.$contents.append(contactView.el)
	}
}
