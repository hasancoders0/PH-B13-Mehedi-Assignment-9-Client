const DeleteConfirmModal = ({
  isOpen,
  closeModal,
  confirmDelete,
}) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">

      <div className="bg-white rounded-2xl max-w-md w-full p-8 animate__animated animate__zoomIn">

        {/* Title */}
        <h2 className="text-3xl font-bold text-slate-800 mb-4 text-center">
          Confirm Delete
        </h2>

        {/* Message */}
        <p className="text-slate-600 text-center mb-8">
          Are you sure you want to
          delete this tutor permanently?
        </p>

        {/* Buttons */}
        <div className="flex gap-4">

          <button
            onClick={closeModal}
            className="w-full py-3 rounded-xl border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100 transition"
          >
            Cancel
          </button>

          <button
            onClick={confirmDelete}
            className="w-full py-3 rounded-xl bg-red-500 text-white font-semibold hover:bg-red-600 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;