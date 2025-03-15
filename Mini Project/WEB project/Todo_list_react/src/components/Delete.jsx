const Delete = ({ onConfirm, onCancel }) => {
    return (
      <div className="fixed inset-0 flex md:items-center items-baseline  justify-center bg-gray-300 bg-opacity-50 ">
        <div className="bg-white p-6 rounded-md shadow-md my-50">
          <h2 className="text-lg font-bold ">Are you sure you want to delete?</h2>
          <div className="flex justify-end space-x-4 mt-4">
            <button onClick={onCancel} className="bg-gray-600 text-white px-4 py-2 rounded-md">
              Cancel
            </button>
            <button onClick={onConfirm} className="bg-red-600 text-white px-4 py-2 rounded-md">
              Delete
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Delete;
  