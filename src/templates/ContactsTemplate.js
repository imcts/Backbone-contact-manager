import _ from 'underscore'

const template = `
	<div class="row well">
		<div class="text-center col-sm-6">
			<a href="#new" class="btn btn-lg btn-outline">Add Contact</a>
		</div>
		<div class="text-center col-sm-6">
			<input type="text" class="form-control _search" placeholder="enter contact title to search.">
		</div>
	</div>
	<ul class="media-list row _contacts-content"></ul>
	<div class="empty-contacts-placeholder _no-contacts"></div>
	<div class="empty-search-contacts-placeholder _no-search"></div>
`
export default _.template(template)
