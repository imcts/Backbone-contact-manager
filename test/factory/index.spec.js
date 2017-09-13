import expect from 'expect'
import viewFactory from '../../src/factory'
import { VIEW_FACTORY } from '../../src/constants/index'

describe('viewFactory', () => {
	it('create(): 지정한 값에 따라 뷰가 생성되어야 합니다.', () => {
		// Given
		const collection = []

		// When
		const contactsView = viewFactory.create(VIEW_FACTORY.CONTACTS, { collection })

		// Then
		expect(contactsView.constructor.name).toEqual('ContactsView')
	})

	it('create(): 지정한 값에 해당하는 뷰가 없을시 null을 반환합니다.', () => {
		// Given
		const collection = []

		// When
		const contactsView = viewFactory.create(null, { collection })

		// Then
		expect(contactsView).toNotExist()
	})
})
