import expect from 'expect'
import { isEmail } from '../../src/utils/index'

describe('Utils', () => {
	it('isEmail(): 지정한 이메일의 유효성 검사를 진행합니다.', () => {
		// Given
		const email = 'email@test.email'

		// When
		const result = isEmail(email)

		// Then
		expect(result).toExist()
	})
})
