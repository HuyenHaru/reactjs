import React, { Component } from 'react';
import Lesson from './Lesson';
class Course extends Component {
	// formatName(user) {
	// 	return user.firstName + ' ' + user.lastName;
	// }
	constructor(props){
		super(props);

    this.state = {
    	isShowOutline: false
    };

		this.handleClick3 = this.handleClick3.bind(this);
		this.registerCourse = this.registerCourse.bind(this);
		this.handleToogleOutline = this.handleToogleOutline.bind(this);
	}


	handleClick1() {
    alert("view1")
  }

  handleClick2(content) {
    alert(content)
  }

  handleClick3() {
    alert(this.props.name)
  }

  registerCourse(){
  	alert(this.refs.username.value);
  	//console.log(this.refs.username.value);
  }

  handleToogleOutline(){
  	this.setState({
  		isShowOutline: !this.state.isShowOutline
  	});
  }

	showButtonFree(props) {
	  const isFree = this.props.free;
	  if (isFree === true) {
	    return (
		           <div className="btn-group">
			           <button onClick={this.handleClick1} type="button" className="btn btn-warning">view1</button>
			           <button onClick={() => this.handleClick2("view2 ")} type="button" className="btn btn-danger">view2</button>
			           <button onClick={this.handleClick3} type="button" className="btn btn-success">view3</button>
 		           </div>   
             );
	  } else {
	  	return (
			  	<div className="input-group">
		        <span className="input-group-btn">
		          <button onClick={this.registerCourse} className="btn btn-info" type="button">Register</button>
		        </span>
		        <input type="text" className="form-control" placeholder="username..." ref="username"/>
		      </div>
	  	);
	  }
	}
	render(){

		// const user = {
		// 	firstName: 'Harper',
		// 	lastName: 'Perez'
		// };
		console.log(this.state)
    let elmOutLine = null;
    if(this.state.isShowOutline){
    	elmOutLine = <ul className="list-group">
                    <Lesson />
                    <Lesson />
                    <Lesson />
                </ul>;
    }

		return (
			<div>
				<div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <div className="panel panel-info">
            <div className="panel-heading">
                <h3 className="panel-title">{this.props.name}</h3>
            </div>
            <div className="panel-body">
              <p>{this.props.time}</p>
              <p>{this.props.children}</p>
              <p><button onClick={this.handleToogleOutline} className="btn btn-success" type="button">Toogle Outline</button></p>
              {elmOutLine}  
            </div>
            <div className="panel-footer">
	            {this.showButtonFree()}
            </div>
          </div>
        </div>
			</div>
			);
	}
} 

export default Course;