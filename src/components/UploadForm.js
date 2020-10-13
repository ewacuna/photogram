import React, { useState } from 'react';
import { ProgressBar } from './ProgressBar';

export const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpg', 'image/jpeg'];

    // Set image to the state
    const handleChange = (e) => {
        let selected = e.target.files[0];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError('');
        } else {
            setFile(null);
            setError('Please select an image file');
        }
    };

    return (
        <form>
            <label>
                <input
                    type="file"
                    onChange={handleChange}
                    accept=".png, .jpg, .jpeg"
                />
                <span>+</span>
            </label>

            <div className="output" style={{ fontSize: '1.4rem' }}>
                {error && <div className="error">{error}</div>}
                {file && <div>{file.name}</div>}
                {file && <ProgressBar file={file} setFile={setFile} />}
            </div>
        </form>
    );
};
