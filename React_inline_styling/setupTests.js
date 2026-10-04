const Enzyme = require('enzyme');
const Adapter = require('@cfaester/enzyme-adapter-react-18');
const { StyleSheetTestUtils } = require('aphrodite');

Enzyme.configure({ adapter: new Adapter() });

beforeEach(() => {
	StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
	StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});
