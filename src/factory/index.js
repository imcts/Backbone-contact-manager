import { VIEW_FACTORY } from '../constants'
import Contacts from '../views/ContactsView'
import Contact from '../views/ContactView'
import ContactForm from '../views/ContactFormView'

export default class ViewFactory {
	static create (type, options) {
		switch (type) {
		case VIEW_FACTORY.CONTACTS:
			return new Contacts(options)
		case VIEW_FACTORY.CONTACT:
			return new Contact(options)
		case VIEW_FACTORY.FORM:
			return new ContactForm(options)
		default:
			return null
		}
	}
}
