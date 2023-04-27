import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button, Container } from '@mui/material';

const MessageEditor = ({ mode, selectedTemplate, handleSubmit, handleSave, enableEditMode }) => {
    const [content, setContent] = useState('');
    const readOnly = mode === 'view'
    
    const handleChange = (value) => {
        setContent(value)
    }

    const handleSubmitClick = () => {
        handleSubmit(content)
    }

    const handleSaveClick = () => {
        handleSave(content)
    }

    return(
        <Container>
            <form>
                <label>Template Owner</label>
                <input type="text"></input>
            </form>
            <ReactQuill value={content} onChange={handleChange} readOnly = {readOnly} />
            <Button onClick={handleSubmitClick}>Submit Template</Button>
            <Button onClick={handleSaveClick}>Save Existing Template</Button>
            <Button onClick={enableEditMode}>Edit Template</Button>
        </Container>
    )
}

export default MessageEditor;