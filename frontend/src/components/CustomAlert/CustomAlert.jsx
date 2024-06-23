
const CustomAlert = ({ handleAction, onClose, message,  option }) => {
  return (
    <div role="alert" className="alert w-1/4 h-52 flex flex-col items-center justify-center">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info h-6 w-6 shrink-0">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <h1 className="ml-2 font-semibold text-xl">{message}</h1>
      </div>
      <div className="mt-2 flex gap-2">
        <button className="btn btn-sm" onClick={onClose}>Cerrar</button>
        <button className="btn btn-sm btn-primary" onClick={handleAction}>{option}</button>
      </div>
    </div>
  );
};

export default CustomAlert;
