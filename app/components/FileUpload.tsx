import axios from "axios";
import React from "react";

interface FileUploadProps {
    setNewData: React.Dispatch<React.SetStateAction<any>>
}
// React frontend component for file upload
const FileUpload: React.FC<FileUploadProps> = ({ setNewData }) => {
    const handleFileUpload = async (event: any) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('files', file);

        try {
            // Send file to Flask backend
            const response = await axios.post('http://localhost:5000/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log("I am in file upload", formData, file)

            // Process response and display spreadsheet in UI
            // Example: setWorkbookData(response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <div>
            <input type="file" accept=".xlsx,.csv" onChange={handleFileUpload} />
        </div>
    );
}

export default FileUpload;
