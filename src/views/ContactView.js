import { View } from 'backbone'
import { CONTACT_VIEW } from '../constants/index'
import ContactTemplate from '../templates/ContactTemplate'

export default class ContainerView extends View {
	constructor (options) {
		super({
			tagName: CONTACT_VIEW.TAG_NAME,
			className: CONTACT_VIEW.CLASS_NAME,
			events: {
				'click ._delete': 'destroy'
			},
			...options
		})
	}

	initialize () {
		this.render()
	}

	render () {
		this.$el.html(ContactTemplate(this.model.toJSON()))
	}

	destroy () {
		if (!confirm(CONTACT_VIEW.DELETE_CONFIRM)) {
			return
		}
		this.model.destroy()
		this.remove()
	}
}
