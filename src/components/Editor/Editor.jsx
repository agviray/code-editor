import { useEffect } from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { tokyoNight } from '@uiw/codemirror-theme-tokyo-night';
import './Editor.css';

export default function Editor({
  contentLog, setContentLog, isEditorActive, foundFile, setCodeHistory,
}) {
  useEffect(() => {
    if (Object.keys(foundFile).length !== 0) {
      const foundFileContentLog = foundFile.contentLog;
      const foundCodeHistory = foundFile.codeHistory;
      setContentLog(foundFileContentLog);
      setCodeHistory(foundCodeHistory);
    }
  }, [foundFile]);

  const handleOnChange = (str) => {
    setContentLog([...str.split('')]);
  };

  return (
    <div className='editor' style={{ visibility: `${isEditorActive ? 'visible' : 'hidden'}` }}>
      <CodeMirror
        value={contentLog.join('')}
        onChange={(value) => handleOnChange(value)}
        theme={tokyoNight}
        style={{ textAlign: 'left', overflow: 'auto' }}
        options={{
          lineNumbers: true,
          tabSize: 2,
          indentWithTabs: true,
        }}
        extensions={[javascript({ jsx: true })]}
        autoFocus={isEditorActive}
      />
    </div>
  );
}
