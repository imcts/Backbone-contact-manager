import _ from 'underscore'

const template = `
	<h2 class="page-header text-center">
		<% const isNew = location.hash === '#new' %>
		<% print(isNew ? 'Create' : 'Modify') %> Contact
	</h2>
	<div class="form-horizontal _form">
		<div class="_contents _name">
			<label class="col-sm-4 control-label">Full name:</label>
			<div class="col-sm-6">
				<input type="text" class="form-control _input-name" value="<%=name%>" placeholder="please enter your name.">
				<small class="help-block _help"></small>
			</div>
		</div>
		<div class="_contents _email">
			<label class="col-sm-4 control-label">Email address:</label>
			<div class="col-sm-6">
				<input type="email" class="form-control _input-email" value="<%=email%>" placeholder="please enter your email">
				<small class="help-block _help"></small>
			</div>
		</div>
		<div class="_contents _phone">
			<label class="col-sm-4 control-label">Telephone number:</label>
			<div class="col-sm-6">
				<input type="tel" class="form-control _input-phone" value="<%=phone%>" placeholder="please enter your cell phone number">
				<small class="help-block _help"></small>
			</div>
		</div>
		<div class="form-group">
			<div class="col-sm-offset-4 col-sm-3">
				<button type="submit" class="btn btn-outline btn-lg btn-block <% print(isNew ? '_submit' : '_modify') %>">Submit</button>
			</div>
			<div class="col-sm-3">
				<button class="btn-close-form btn btn-outline btn-lg btn-block _cancel">Cancel</button>
			</div>
		</div>
	</div>
`
export default _.template(template)
