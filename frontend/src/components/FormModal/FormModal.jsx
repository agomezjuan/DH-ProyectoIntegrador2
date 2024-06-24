
function FormModal({ isOpen, children, onClose }) {
    if (!isOpen) {
        return null;
      }
      return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 shadow-lg w-1/3">
            <div className="modal-content">
              {children}
            </div>
            <div className="modal-footer mt-4 text-right">
              <button
                onClick={onClose}
                className="btn btn-ghost btn-sm btn-outline mr-2"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      );
    }

export default FormModal;
