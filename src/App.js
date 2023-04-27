import React, {useState} from 'react';
import MessageEditor from './MessageEditor'
import { Container } from '@mui/material';
import DOMPurify from 'dompurify';

const App = () => {

  const [mode, setMode] = useState('create');
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleSubmit = async (content) => {
    const sanitizedHtmlContent = DOMPurify.sanitize(content);

    const payload = {
      htmlContent: sanitizedHtmlContent,
    };

    console.log("payload: " + payload.htmlContent)
    console.log('Template submitted successfully')
    setMode('view')
    setSelectedTemplate(content)
    console.log(mode)
    console.log(selectedTemplate)
    // try {
    //     const response = await fetch('https://example.com/api/email-template', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(payload),
    //     });
  
    //     if (!response.ok) {
    //       throw new Error('Failed to save the template');
    //     }
  
    //     console.log('Template saved successfully');
    //   } catch (error) {
    //     console.error(error);
    //   }
}

const handleSave = async (content) => {
  setMode('view')
  console.log("I've clicked submit after editing")
  console.log("This is the edited content: " + content)
}

const enableEditMode = () => {
  setMode('edit')
  console.log("enabled edit mode")
}

  return (
    <Container>
      <MessageEditor mode={mode} selectedTemplate={selectedTemplate}  handleSubmit={handleSubmit} handleSave={handleSave} enableEditMode={enableEditMode}/>
    </Container>
  )
}

export default App;

// potential structure for what makes up a MessageTemplate:
// {
//   templateId: 312,
//   templateOwner: "Aziz",
//   templateName: "First message notification",
//   content: "<p>some text in HTML</p>"
// }

