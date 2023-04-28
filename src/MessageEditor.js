import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button, Container } from '@mui/material';

const MessageEditor = ({ mode, selectedTemplate, handleSubmit, enableEditMode }) => {
    const [content, setContent] = useState(selectedTemplate || '');
    const readOnly = mode === 'view'

    const handleChange = (value) => {
        setContent(value)
    }

    const handleSubmitClick = () => {
        handleSubmit(content)
    }

    return(
        <Container>
            <ReactQuill value={content} onChange={handleChange} readOnly = {readOnly} />

        {
            mode !== 'view' && (
            <Button onClick={handleSubmitClick}>
                {mode === 'create' ? "Submit" : 'Save'}
            </Button>
            )
        }

        {
            mode === 'view' && <Button onClick={enableEditMode}>Edit Template</Button>
        }
        </Container>
    )
}

export default MessageEditor;