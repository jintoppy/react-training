import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import Home from '../app/js/components/Home';

describe('<Home /> ', ()=> {

	it('should have a div', ()=>{
		const wrapper = shallow(<Home />);
		expect(wrapper.find('div')).to.have.length(1);
	});

});