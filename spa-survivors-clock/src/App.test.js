import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount} from 'enzyme';
import moment from 'moment';
import "moment-timezone";
// import App from './App';
import Board from './Board';



// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

describe('<App />', () => {
  const mockTime = "2014-06-01T12:00:00Z";
  const oldTimeFormat = moment.prototype.format;

  beforeEach(() =>  {
    moment.prototype.format = () => mockTime;
  });
  
  afterEach(() => {
    moment.prototype.format = oldTimeFormat;
  });

  const citiesObj=[
    {
        city: 'Stockholm',
        region: 'Europe'
    } ]
  

  test('time', () => {
    const board = mount(<Board  citiesObj = {citiesObj}/>);
    console.log(board.first().find('.time').html());
      const time = board.find('.time').text();    
      expect(time).toEqual(mockTime);
  })
});


