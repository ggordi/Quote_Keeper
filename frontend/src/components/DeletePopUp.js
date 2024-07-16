import React from 'react';

const DeletePopUp = ({ onConfirm, onCancel }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-xl mb-4">Are you sure you want to delete this quote?</h2>
                <div className="flex justify-end">
                    <button
                        onClick={onCancel}
                        className="mr-4 bg-gray-300 text-black py-2 px-4 rounded hover:bg-gray-400"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletePopUp
