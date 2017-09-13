import { View } from 'backbone'
import { APP_VIEW } from '../constants/index'
import AppTemplate from '../templates/AppTemplate'

export default class ContainerView extends View {
	constructor (options) {
		super({ el: APP_VIEW.DEFAULT_SELECTOR, ...options })
		this.render()
		this.setDomCache()
	}

	render () {
		this.$el.html(AppTemplate())
	}

	setDomCache () {
		this.$contents = this.$(APP_VIEW.CONTENTS_SELECTOR)
	}

	update (view) {
		this.removeCurrentView(view)
		this.setCurrentView(view)
		this.drawContents(view)
	}

	removeCurrentView (view) {
		if (!this.currentView) {
			return
		}
		this.currentView.remove()
	}

	setCurrentView (view) {
		this.currentView = view
	}

	drawContents (view) {
		this.$contents.html(view.el)
	}
}
