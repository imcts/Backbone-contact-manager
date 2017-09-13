import expect from 'expect'
import Contacts from '../../src/collections/Contacts'

import Backbone from 'backbone'

describe('Contacts', () => {
	it('Contacts(): 모델을 추가할 수 있어야 합니다.', () => {
		// Given
		const contacts = new Contacts()

		// When
		contacts.add({
			id: 1,
			name: 'dolen'
		})

		// Then
		expect(contacts.get(1).get('name')).toEqual('dolen')
	})

	it('search(): 지정한 검색어와 매칭되는 모델 목록을 반환 합니다.', () => {
		// Given
		const collection = new Contacts()
		collection.add([
			{ name: 'test1' },
			{ name: 'test2' },
			{ name: 'test3' }
		])

		// When
		const contacts = collection.search('test')

		// Then
		expect(contacts.length).toEqual(3)
	})

	it('test', () => {
		// Given
		const Model = Backbone.Model.extend({
			defaults: function () {
				return {
					test: 1
				}
			},

			url: 'test',

			validate: function () {
				console.log('validate!!!!!!!!!!!!!!!!!!!!!!!!!!')
			}
		})

		// TODO 에혀 ;ㅅ ; 왜그래쓰까.. 이케 테스트만 해봤어도 답이 나왔을거인데 ㅠㅠㅠㅠㅠ
		//const model = new Model({
		//	test: 3
		//})
		//model.save('test', 5)

		const Collection = Backbone.Collection.extend({
			model: Model
		})

		const collection = new Collection()
		const model = collection.create({
			test: 3
		})

		model.save({
			test: 55
		})

		console.log()

		// When

		// Then
	})
})
