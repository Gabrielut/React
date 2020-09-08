import React, { Component } from 'react'
import web from './web.jpg';
import js from './js.jpg';
import html from './html.jpg';
import Carousel from 'react-bootstrap/Carousel'
export class BootstrapCarousel extends Component {
    render() {
        return (
            <div>
                <div class='container-fluid' >
                    <div className="row title" style={{ marginBottom: "1px" }} >
                        <div class="col-sm-12 btn btn-warning">
                            Nuestros cursos
                         </div>
                    </div>
                </div>
                <div className='container-fluid' >
                    <Carousel>
                        <Carousel.Item  >
                            <img 
                                className="d-block w-100"
                                src={web} />                            
                        </Carousel.Item  >
                        <Carousel.Item >
                            <img 
                                className="d-block w-100"
                                src={js} />                           
                        </Carousel.Item>
                        <Carousel.Item >
                            <img 
                                className="d-block w-100"
                                src={html} />                           
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}
export default BootstrapCarousel 