import React from 'react';
import cursoImage from './cursos.jpg';
import './index.css';
import Course from './curso';
import Modal from './Modal';
import Carrusel from './Carrusel';

// Los siguientes 3 hacen lo mismo y son 3 formas diferentes de hacerlo
// Componente funcion
// function Course(props) {
//   return (

//     <div className="course">
//       <img src={cursoImage}></img>
//       <h3>{props.titulo}</h3>
//       <a href={props.link}>Ver Curso</a>
//     </div>
//   );
// };

// Componente arrow function
// const Course = (props) => {
//   return (
//     <div className="course">
//       <img src={cursoImage} alt=""></img>
//       <h3>{props.titulo}</h3>
//       <a href={props.link} >Ver Curso</a>
//       <span>Recomendaciones {props.likes}</span>
//       <button onClick={}>Me Gusta</button>
//       <button onClick={}>No me gusta</button>
//     </div>
//   );
// }

// Componente de clase


class App extends React.Component {
  state = {
    courses: [
      {
        id: 0,
        titulo: 'Curso de web',
        link: '/web',
        likes: 2,
        available : true
      },
      {
        id: 1,
        titulo: 'Curso de js',
        link: '/js',
        likes: 5,
        available : true
      },
      {
        id: 2,
        titulo: 'Curso de Html',
        link: '/html',
        likes: 8,
        available : true
      },
    ]
  };
  render() {
    return (
      <div className="App">
        <header>          
        </header>
        <Modal></Modal>
        
        <section className="courses">
          {this.state.courses.map(course => {
            if (course.available) {
            return (
              <Course titulo={course.titulo} link={course.link} likes={course.likes}></Course>
            )
          }else{
          return <h3>Curso no disponible</h3>
          }  
          }
          )};

        </section>
        <Carrusel></Carrusel>
        <footer>
          <p>Todos los derechos reservados</p>
        </footer>
      </div>
    );
  };
  //  render(){
  // return (
  //   <div className="App">
  //     <header>
  //       <h1>Bienvenidos a nuestros cursos</h1>
  //     </header>
  //     <section className="courses">
  //       <Course  ></Course>
  //       <Course  ></Course>
  //       <Course  ></Course>

  //     </section>
  //     <footer>
  //       <p>Todos los derechos reservados</p>
  //     </footer>
  //   </div>
  // );
  //  };
}

export default App;
