const Popup = ({ title, message, handleOkClick }) => (
  <div>
    <div className="fixed inset-0 max-w-screen-lg mx-auto bg-gray-800 opacity-75 pointer-events-none" />
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="z-50 w-11/12 mx-auto overflow-y-auto bg-white rounded shadow-lg sm:max-w-sm">
        <div className="px-6 py-4 text-left modal-content">
          <div className="flex items-center justify-between pb-3">
            <p className="text-lg font-bold text-gray-900">{title}</p>
          </div>
          <div className="py-2 text-gray-800">{message}</div>
          <div className="flex justify-end pt-2">
            <button
              className={`px-4 py-1 bg-green-500 text-white rounded outline-none focus:outline-none`}
              onClick={handleOkClick}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Popup;
