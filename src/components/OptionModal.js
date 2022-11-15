import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


const MyModal= (props)=>(
        <Modal
        isOpen={props.clicked}
        // onAfterOpen={afterOpenModal}
        onRequestClose={props.handleCloseWSID}
        // style={customStyles}
        contentLabel="Example Modal"
        >
        {props.whatShouldIDo} <br />
        <button onClick={props.handleCloseWSID}>X</button>
        
        </Modal>
        
)



export default MyModal