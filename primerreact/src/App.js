import React from 'react';
import headerImage from './header.jpg';
import cursoImage from './cursos.jpg';
import './index.css';

// Los siguientes 3 hacen lo mismo y son 3 formas diferentes de hacerlo
// Componente funcion
function Course(props) {
  return (

    <div className="course">
      <img src={cursoImage}></img>
      <h3>{props.titulo}</h3>
      <a href={props.link}>Ver Curso</a>
    </div>
  );
};

// Componente arrow function
// const Course = (props) =>{
//   return (
//     <div className="course">
//       <img src={cursoImage}></img>
//       <h3>{props.titulo}</h3>
//       <a href={props.link}>Ver Curso</a>
//     </div>
//   );
// }

// Componente de clase
// class Course extends React.Component{
// render(){
//     return (
//     <div className="course">
//       <img src={cursoImage}></img>
//       <h3>{this.props.titulo}</h3>
//       <a href={this.props.link}>Ver Curso</a>
//     </div>
//   );
// }
// }

function App() {
  return (
    <div className="App">
      <header>
        <h1>Bienvenidos a nuestros cursos</h1>
      </header>
      <section className="courses">
        <Course titulo="Curso de desarrollo web" link="/web"></Course>
        <Course titulo="Curso de js" link="/js"></Course>
        <Course titulo="Curso de Html" link="/html"></Course>

      </section>
      <footer>
        <p>Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
