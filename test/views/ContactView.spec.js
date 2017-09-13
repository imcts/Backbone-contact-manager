import expect, { createSpy } from 'expect'
import { Model } from 'backbone'
import ContactView from '../../src/views/ContactView'

describe('ContactView', () => {
	it('ContactsView(): 지정한 모델을 참조하여 엘리먼트를 생성 합니다.', () => {
		// Given
		const model = new Model({
			id: 1,
			name: 'name',
			phone: '010-1234-5678',
			email: '123@nate.com'
		})

		// When
		const contactView = new ContactView({ model })

		// Then
		const text = contactView.$el.text().replace(/\s/g, '')
		expect(text).toEqual('namePhoneNumber:010-1234-5678Email:123@nate.comEditDelete')
	})

	it('destroy(): 삭제 버튼이 클릭되었을때 이벤트 핸들러가 호출되어야 합니다.', () => {
		// Given
		const spy = createSpy()
		class ExtendContactView extends ContactView {
			destroy () {
				spy()
			}
		}
		const model = new Model({
			id: 1,
			name: 'name',
			phone: '010-1234-5678',
			email: '123@nate.com'
		})
		const contactView = new ExtendContactView({ model })

		// When
		contactView.$('._delete').click()

		// Then
		expect(spy).toHaveBeenCalled()
	})
})
