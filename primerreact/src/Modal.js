import React from 'react';
import 'react-bootstrap';

function Modal(){
    return(
        <div class="modal">
        <div class="modal-dialog" role="document" id="ModalEjemplo" role="dialog" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">Save changes</button>
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    );
}


export default Modal;
