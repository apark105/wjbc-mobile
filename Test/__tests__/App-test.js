/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../../App/src/App';
import { shallow } from 'enzyme';

jest.mock('../../App/src/Route', ()=>(
  {createAppContainer: "Hello"}))

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { JestEnvironment } from '@jest/environment';

describe('Rendering', ()=>{
  let component, instance;
  beforeEach( () =>{
     component = shallow(<App />);
     instance = component.instance();
  })

  // it('renders the component', () => {
  //   const wrapper = shallow(<App />);
  //   expect(wrapper.find(Foo)).to.have.lengthOf(3);
  // });
  
  it('it should be defined', ()=>{
    expect(instance).toBeDefined();
  })

  it('class should include Header', ()=>{
    expect(component.find(".header"))
  })
})
it('renders correctly', () => {
  renderer.create(<App />);
});
