import React from 'react';
import Header from '../components/Header/Header';

describe('<Header>', () => {
  const wrapper = shallow(<Header />);

  it('<Header> renders without crashing', () => {
    expect(wrapper.find('.App-header')).to.have.length(1);
  });

  it('<Header> contains Xavi Majoral', () => {
    expect(wrapper.find('.btn-success').text()).to.equal('Xavi Majoral');
  });

});