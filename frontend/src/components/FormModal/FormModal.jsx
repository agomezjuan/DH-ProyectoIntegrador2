function FormModal({ isOpen, children }) {
  return (
    <dialog id='my_modal_1' className='modal'>
      <div className='modal-box'>
        {children}
        <div className='modal-action'>
          <button className='btn'>Close</button>
        </div>
      </div>
    </dialog>
  );
}

export default FormModal;
