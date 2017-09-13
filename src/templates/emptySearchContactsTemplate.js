import _ from 'underscore'

const template = `
	<div class="well text-center"><h3>There is no contacts starting with <strong><%=seachWord%>.</strong></h3></div>
`
export default _.template(template)
