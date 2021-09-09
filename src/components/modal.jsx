import React from 'react';

import Modal from 'react-modal';

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
                <button onClick={props.closeModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </div>
    );
};

// ReactDOM.render(<App />, appElement);
export default SaveTrainingModal;
