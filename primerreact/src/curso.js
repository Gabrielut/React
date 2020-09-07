import React from 'react';
import cursoImage from './cursos.jpg';
import './index.css';

class Course extends React.Component{
    constructor(props){
      super(props);
    this.state = {
      likes: props.likes,
    }
  }
  addLike = () =>{
    this.setState({likes: this.state.likes + 1});
  }
  removeLike = () =>{
    this.setState({likes: this.state.likes - 1});
  }
  
    render(){
      return (
        <div className="course">
        <img src={cursoImage} alt=""></img>
        <h3>{this.props.titulo}</h3>
        <a href={this.props.link} >Ver Curso</a>
        <span>Recomendaciones {this.state.likes}</span>
         <button onClick={this.addLike}>Me Gusta</button>
        <button onClick={this.removeLike}>No me gusta</button>  
      </div>
      );
       };
  }

  export default Course;