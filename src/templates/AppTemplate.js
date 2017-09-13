import _ from 'underscore'
import Header from './include/Header'
import Footer from './include/Footer'

const template = `
	${Header}
	
	<div class="container">
		<div class="row">
			<div class="col-xs-12 _contents"></div>
		</div>
	</div>
	
	${Footer}
`
export default _.template(template)
