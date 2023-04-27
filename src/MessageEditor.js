import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Button, Container } from '@mui/material';

const MessageEditor = ({handleSubmit}) => {
    const [content, setContent] = useState('');
    
    const handleChange = (value) => {
        setContent(value)
    }

    return(
        <Container>
            <form>
                <label>Template Owner</label>
                <input></input>
            </form>
            <ReactQuill value={content} onChange={handleChange} />
            <Button onClick={() => handleSubmit(content)}>Click Me</Button>
        </Container>
    )
}

export default MessageEditor;