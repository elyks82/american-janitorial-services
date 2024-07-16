// useModal.js
import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const openModal = (title, children) => {
        document.body.style.overflow = 'hidden';
        setModalContent({ title, children });
        setIsOpen(true);
    };

    const closeModal = () => {
        document.body.style.overflow = 'auto';
        setIsOpen(false);
    };

    const cleanup = () => {
        document.body.style.overflow = 'auto';
        const modalContainer = document.getElementById('modal-container');
        if (modalContainer) {
            modalContainer.innerHTML = '';
        }
    };

    useEffect(() => {
        return () => {
            cleanup();
        };
    }, []);

    const Modal = () => {
        if (!isOpen) {
            return null;
        }

        const modalContainer = document.getElementById('modal-container') || document.createElement('div');
        if (!document.getElementById('modal-container')) {
            modalContainer.id = 'modal-container';
            document.body.appendChild(modalContainer);
        }

        const handleClose = () => {
            closeModal();
        };

        return ReactDOM.createPortal(
            <ModalComponent title={modalContent.title} onClose={handleClose}>
                {modalContent.children}
            </ModalComponent>,
            modalContainer
        );
    };

return { Modal, openModal, closeModal };
};



const ModalComponent = ({ title, onClose, children }) => {
    const modalStyles = {
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        },

        content: {
            backgroundColor: 'rgba(50, 50, 50)',
            color: 'white',
            margin: '0px',
            padding: '0px',
            borderRadius: '8px',
            maxWidth: '80%',
            minWidth: '300px',
            maxHeight: '90vh',
            overflowY: 'auto',
        },
    };

    return (
        <div style={modalStyles.overlay}>
            <div style={modalStyles.content}>
            <div className="w-100 flex flex-column justify-between items-center justify-center">
                <div id='left' style={{ width: '40px' }}></div>
                <div id='middle'>
                    <p  className="ml-2 mr-2 mt-2 mb-2 text-sm font-semibold text-center">{title}</p>
                </div>
                <div id='right' className='m-1' >
                    <button
                    className="ml-2 mr-2 bg-gray-500 hover:bg-gray-300 focus:bg-gray-200 transition rounded-full px-2 py-1 text-white text-sm mt-1 mb-1"
                    onClick={onClose}
                    >{'✕'}
                    </button>
                </div>
            </div>
            <hr className='border-gray-500'/>
            <div style={{ maxHeight: 'calc(90vh - 70px)', overflowY: 'auto' }}>
                {children}
            </div>
            </div>
        </div>
    );
};

ModalComponent.propTypes = {
    title: PropTypes.string.isRequired, // Assuming title is a required string
    onClose: PropTypes.func.isRequired, // Assuming onClose is a required function
    children: PropTypes.node, // children is optional and can be anything renderable
};


export default useModal;
