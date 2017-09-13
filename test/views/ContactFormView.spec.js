import expect, { createSpy } from 'expect'
import { Model } from 'backbone'
import ContactFormView from '../../src/views/ContactFormView'

describe('ContactFormView', () => {
	it('ContactFormView(): 지정한 모델로 화면을 갱신해야 합니다.', () => {
		// Given
		const model = new Model({
			name: '이름',
			email: '123@email.com',
			phone: '010-1234-5678'
		})

		// When
		const contactFormView = new ContactFormView({ model })

		// Then
		expect(contactFormView.$('._input-name').val()).toEqual('이름')
		expect(contactFormView.$('._input-email').val()).toEqual('123@email.com')
		expect(contactFormView.$('._input-phone').val()).toEqual('010-1234-5678')
	})

	it('modify(): 전송 버튼이 클릭되었을때 이벤트 핸들러가 실행되어야 합니다.', () => {
		// Given
		const spy = createSpy()
		class ExtendContactFormView extends ContactFormView {
			modify () { spy()	}
		}
		const model = new Model({
			name: '',
			email: '',
			phone: ''
		})
		const contactFormView = new ExtendContactFormView({ model })

		// When
		contactFormView.$('._modify').click()

		// Then
		expect(spy).toHaveBeenCalled()
	})
})
