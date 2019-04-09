import React from 'react';
import { shallow, mount } from "enzyme";
import Index from 'pages/index';

describe('Index', () => {
    it('should render without error', () => {
        const component = shallow(<Index/>);
        expect(component).toMatchSnapshot();
    });
    it('should render 2 Titles', () => {
        const component = mount(<Index/>);
        expect(component.find('Title')).toHaveLength(2);
    });
});