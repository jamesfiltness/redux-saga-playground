import 'raf/polyfill';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() });

global.shallow = shallow;
global.mount = mount;

const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const { document } = (new JSDOM('')).window;
global.document = document;
global.window = document.defaultView;
global.navigator = global.window.navigator;
