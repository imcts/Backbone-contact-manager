import expect from 'expect'
import Contact from '../../src/models/Contact'

describe('Contact', () => {
	it('Contact(): 지정한 초기값으로 모델이 생성되어야 합니다.', () => {
		// Given
		const options = {
			id: 1,
			name: 'dolen',
			phone: '010-1234-5678',
			email: '123@email.com'
		}

		// When
		const model = new Contact(options)

		// Then
		expect(options).toEqual(model.toJSON())
	})

	it('validate(): 입력된 값의 유효성 검사를 진행 합니다.', () => {
		// Given
		const model = new Contact()

		// When
		const errors = model.validate({
			name: 'dolen',
			phone: '010-1234-5678',
			email: '123@email.com'
		})

		// Then
		expect(errors).toNotExist()
	})

	it('validate(): 유효성 검사에 실패할 경우 에러 목록을 반환 합니다.', () => {
		// Given
		const model = new Contact()

		// When
		const errors = model.validate({
			name: '',
			phone: '010-1234-5678',
			email: '123emailcom'
		})

		// Then
		expect(errors).toEqual([
			{
				className: '._name',
				message: 'name is required'
			}, {
				className: '._email',
				message: 'enter an email format'
			}
		])
	})
})
