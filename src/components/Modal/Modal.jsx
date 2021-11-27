import React, { useState } from 'react';

import Modal from 'react-modal';
import { saveTraining } from '../../redux/training/training-actions';

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
    const [morning, setMorning] = useState('');
    const [lunch, setLunch] = useState('');
    const [evening, setEvening] = useState('');
    const [night, setNight] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        dispatchEvent(saveTraining({}));
    }

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
                <form className="newTrainingForm" onSubmit={handleSubmit}>
                    <label htmlFor="morning">
                        Mañana
                        <textarea
                            id="morning"
                            value={morning}
                            onChange={e => setMorning(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="lunch">
                        Medio día
                        <textarea
                            id="lunch"
                            value={lunch}
                            onChange={e => setLunch(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="evening">
                        Tarde
                        <textarea
                            id="evening"
                            value={evening}
                            onChange={e => setEvening(e.target.value)}
                            required
                        />
                    </label>
                    <label htmlFor="night">
                        Noche
                        <textarea
                            id="night"
                            value={night}
                            onChange={e => setNight(e.target.value)}
                            required
                        />
                    </label>
                    <input type="date" />
                    <button>Utilizar un entreno anterior como plantilla</button>
                    <button type="submit">Guardar entreno</button>
                </form>
            </Modal>
        </div>
    );
};

export default SaveTrainingModal;
