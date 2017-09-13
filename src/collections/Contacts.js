import { Collection } from 'backbone'
import { LocalStorage } from 'backbone.localstorage'
import { CONTACTS } from '../constants/index'
import Contact from '../models/Contact'

export default class Contacts extends Collection {
	constructor () {
		super()
		this.model = Contact
		this.localStorage = new LocalStorage(CONTACTS.LOCAL_STORAGE)
		this.fetch()
	}

	search (searchWord) {
		const regExp = new RegExp(searchWord)
		return this.filter((contact) => regExp.test(contact.get('name')))
	}
}
