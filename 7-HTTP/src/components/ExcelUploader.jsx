import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const ExcelUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('Please select a file.');
      return;
    }
  
    const reader = new FileReader();
  
    reader.onload = async (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
  
      // Assuming the Excel file has only one sheet
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
  
      // Convert sheet data to JSON
      const jsonData = XLSX.utils.sheet_to_json(sheet);
  
      // Get existing data from the server
      const existingData = await getExistingData();
  
      // Separate data into new and existing items
      const newData = [];
      const updatedData = [];
  
      jsonData.forEach(item => {
        const existingItem = existingData.find(existing => existing.id === item.id);
  
        if (existingItem) {
          // If Id already exists, update the information
          updatedData.push({ ...existingItem, ...item });
        } else {
          // If Id is new, add it to newData
          newData.push(item);
        }
      });
  
      // Update existing data on the server
      if (updatedData.length > 0) {
        try {
          const updateResponse = await fetch('http://localhost:3000/excel', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
          });
  
          if (updateResponse.ok) {
            console.log('Existing data updated successfully!');
          } else {
            console.error('Failed to update existing data on the server.');
          }
        } catch (updateError) {
          console.error('Error updating existing data:', updateError);
        }
      }
  
      // Insert new data into the server
      if (newData.length > 0) {
        try {
          const insertResponse = await fetch('http://localhost:3000/excel', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newData),
          });
  
          if (insertResponse.ok) {
            console.log('New data inserted successfully!');
          } else {
            console.error('Failed to insert new data on the server.');
          }
        } catch (insertError) {
          console.error('Error inserting new data:', insertError);
        }
      }
    };
  
    reader.readAsArrayBuffer(selectedFile);
  };
  
  // Function to get existing data from the server
  const getExistingData = async () => {
    try {
      const response = await fetch('http://localhost:3000/excel');
      return await response.json();
    } catch (error) {
      console.error('Error getting existing data:', error);
      return [];
    }
  };  

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ExcelUploader;
