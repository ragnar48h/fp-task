import React, { useState } from 'react';


export default function Upload () {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileSelected, setFileSelected] = useState(false);
  const [fileValid, setFileValidation] = useState(false);
  const [data, setData] = useState(null);
  
  const handleDragEnter = e => {
    e.preventDefault();
    console.log("drag enter");
  };

  const handleDragLeave = e => {
    e.preventDefault();
    console.log("drag leave");
  };

  const handleDragOver = e => {
    e.preventDefault();
    console.log("drag over");
  };

  const validateFile = (file) => {
    console.log("File Type:", file[0].type);
    if( file[0].type === 'application/json')
      setFileValidation(true);  
    else
      setFileValidation(false);
  }

  const handleDrop = e => {
    e.preventDefault();
    console.log("drag drop");
    const files = e.dataTransfer.files;
    setSelectedFile(files);
    validateFile(files);
    setFileSelected(true);
    console.log(files);
  };

  const handleInputChange = event => {
    event.preventDefault();
    console.log("blah blah");
    const files = event.target.files;
    setSelectedFile(files);
    validateFile(files);
    setFileSelected(true);
    console.log(files);
  };

  const submit = () => {
    console.log(selectedFile)
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      console.log(typeof text)
      let JSONData = JSON.parse(text);
      setData(JSONData);
    };
    reader.readAsText(selectedFile[0])
  }
  const check = () => {
    console.log(data);
  }
    return (
      <div className="p-8 bg-gray-50">
        <div>
            <label className="block text-sm font-medium text-gray-700">Upload JSON</label>
            <div 
              onDrop={e => handleDrop(e)}
              onDragOver={e => handleDragOver(e)}
              onDragEnter={e => handleDragEnter(e)}
              onDragLeave={e => handleDragLeave(e)}
              className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {fileSelected ? (fileValid ? (
                  <div>
                    <p className="pl-1 text-sm text-gray-600">
                      File Selected:{' '}
                      <span className="relative bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">{selectedFile[0].name}</span>
                    </p>
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="text-sm">Change file?</span>
                      <input onChange={handleInputChange} id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                  </div>
                ):(
                  <div>
                    <div className="flex text-sm text-gray-600">
                        <span className="relative bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500">Invalid File Type: </span>
                        <p className="pl-1">Please upload JSON File only.</p>
                    </div>
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span className="text-sm">Upload again.</span>
                      <input onChange={handleInputChange} id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                  </div>
                )) : (
                  <div>
                    <div className="flex text-sm text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                      >
                        <span>Upload a file</span>
                        <input onChange={handleInputChange} id="file-upload" name="file-upload" type="file" className="sr-only" />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">JSON File up to 10MB</p>
                  </div>  
                )}
              </div>
            </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            onClick={submit}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Upload
          </button>
          <button
            onClick={check}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            CHECK
          </button>
        </div>
      </div>
    );
  }
  