import React from 'react';

import Modal from 'react-modal';

import './styles.scss';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const SaveTrainingModal = props => {
    console.log(props);
    return (
        <div>
            <Modal
                isOpen={props.isOpen}
                onAfterOpen={props.afterOpenModal}
                onRequestClose={props.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                {/* <h2 ref={_subtitle => (props.subtitle = _subtitle)}>Hello</h2> */}
                <button onClick={props.closeModal}>Cancelar</button>
                <div>¿Qué has entrenado hoy?</div>
                <form className="newTrainingForm">
                    <label htmlFor="morning">
                        Mañana
                        <textarea id="morning" required />
                    </label>
                    <label htmlFor="lunch">
                        Medio día
                        <textarea id="lunch" required />
                    </label>
                    <label htmlFor="evening">
                        Tarde
                        <textarea id="evening" required />
                    </label>
                    <label htmlFor="night">
                        Noche
                        <textarea id="night" required />
                    </label>
                    <input type="date" />
                    <button>Utilizar un entreno anterior como plantilla</button>
                    <button>Guardar entreno</button>
                </form>
            </Modal>
        </div>
    );
};

// ReactDOM.render(<App />, appElement);
export default SaveTrainingModal;
