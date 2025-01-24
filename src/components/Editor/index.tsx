import { Controlled as CodeMirror } from 'react-codemirror2';
import "./index.css"
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import { useState } from 'react';

const Editor = () => {
    const [code, setCode] = useState<string>('{ name: "Karan" }');
    return (
        <div className='editor-wrapper'>
            <CodeMirror
                value={code}
                className='editor'
                options={{
                    mode: 'javascript',
                    theme: 'material',
                    lineNumbers: false,
                    readOnly: false,

                }}
                onBeforeChange={(editor, data, value) => {
                    setCode(value);
                }}
            />
        </div>
    );
};
export default Editor