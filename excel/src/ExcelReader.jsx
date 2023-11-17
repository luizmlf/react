// ExcelReader.js

import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const url = "http://localhost:3000/data"

const ExcelReader = () => {
  const [excelData, setExcelData] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });

      // Assuming the first sheet is the one you want to read
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convert sheet data to JSON with headers
      const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
   
      setExcelData(jsonData);
    };

    reader.readAsArrayBuffer(file);
   
    
  };

  console.log(excelData)

  return (
    <div>
      <input type="file" onChange={handleFileUpload} />
      {excelData && (
        <div>
          <h2>Excel Data</h2>
          <table>
            <thead>
              <tr>
                {excelData[0].map((header, index) => (
                  <th key={index}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {excelData.slice(1).map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ExcelReader;
