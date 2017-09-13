import _ from 'underscore'

const template = `
	<div class="media-heading">
		<h3>
			<%=name%>
		</h3>
	</div>
	<div class="media-body">
		<dl>
			<dt>Phone Number:</dt><dd><%=phone%></dd>
			<dt>Email:</dt><dd><%=email%></dd>
		</dl>
	</div>
	<div class="contact-btn-wrapper">
		<a href="#edit/<%=id%>" class="edit-contact btn btn-outline"><span class="glyphicon glyphicon-pencil"></span> Edit</a>
		<a href="#contacts" class="delete-contact btn btn-outline _delete">
			<span class="glyphicon glyphicon-trash"></span> Delete
		</a>
	</div>
	<hr/>
`
export default _.template(template)
