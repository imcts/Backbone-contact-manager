import Backbone from 'backbone'
import Contacts from './collections/Contacts'
import ContactRouter from './router/Router'
import AppView from './views/AppView'

const contacts = new Contacts()
const appView = new AppView()
const contactRouter = new ContactRouter({ appView, contacts }) // eslint-disable-line

Backbone.history.start()
