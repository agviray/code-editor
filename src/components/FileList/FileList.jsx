import { useState, useEffect } from 'react';
import FileItem from '../FileItem/FileItem';
import { fetchFiles } from '../../utilities/files-api';

export default function FileList() {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    async function getFiles() {
      setFiles(await fetchFiles());
    }
    getFiles();
  }, []);

  const fileListItems = files.map((file, idx) => <FileItem file={file} key={idx} />);

  return (
    <>
    {
      files.length === 0 ? <h3>No Files Yet!</h3>
        : <>
      <h1>Files</h1>
      <ul>{fileListItems}</ul>
      </>
    }
    </>
  );
}
