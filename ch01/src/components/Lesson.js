import React, { Component } from 'react';

class Lesson extends Component {
	render(){
		return React.createElement('li', {className: 'list-group-item'}, 'React 123');                 
        //<li class="list-group-item">Item1</li>
	}
} 

export default Lesson;