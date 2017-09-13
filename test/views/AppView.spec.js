import expect from 'expect'
import Backbone from 'backbone'
import AppView from '../../src/views/AppView'

describe('AppView', () => {
	it('AppView(): 헤더와 푸터를 포함한 앱을 생성해야 합니다.', () => {
		// Given
		const el = '#app'

		// When
		const appView = new AppView({ el })

		// Then
		expect(appView.$('._header').length).toExist()
		expect(appView.$('._footer').length).toExist()
	})

	it('update(): 지정한 뷰에따라 화면을 갱신해야 합니다.', () => {
		// Given
		const appView = new AppView({ el: '#app' })
		const View = Backbone.View.extend({
			initialize: function () {
				this.$el.html('내용')
			}
		})

		// When
		appView.update(new View())

		// Then
		expect(appView.$('._contents').html()).toEqual('<div>내용</div>')
	})
})
