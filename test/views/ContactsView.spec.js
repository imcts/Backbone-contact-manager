import expect from 'expect'
import { Collection } from 'backbone'
import ContactsView from '../../src/views/ContactsView'

describe('ContactsView', () => {
	it('ContactsView(): 지정한 컬렉션을 참조하여 화면을 갱신 합니다.', () => {
		// Given
		const collection = new Collection({
			id: 1,
			name: 'name',
			phone: '010-1234-5678',
			email: '123@email.com'
		})

		// When
		const contactsView = new ContactsView({ collection })

		// Then
		const text = contactsView.$('._contacts-content').text().replace(/\s/g, '')
		expect(text).toEqual('namePhoneNumber:010-1234-5678Email:123@email.comEditDelete')
	})

	it('ContactsView(): 컬렉션이 비어 있을때 알림 영역을 노출 합니다.', () => {
		// Given
		const collection = new Collection()

		// When
		const contactsView = new ContactsView({ collection })

		// Then
		const text = contactsView.$('._no-contacts').text().replace(/\s/g, '')
		expect(text).toEqual('Thereisnocontacts.AddContact')
	})
})
