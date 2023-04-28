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

    mode === 'create' ? console.log('Template submitted successfully') : console.log('Template SAVED successfully ~~')
    setMode('view')
    setSelectedTemplate(content)
    console.log("mode before render happens is: " + mode)
    console.log("selected template before the render is: " + selectedTemplate)

    
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

const enableEditMode = () => {
  setMode('edit')
  console.log("enabled edit mode")
}

  return (
    <Container>
      <MessageEditor mode={mode} selectedTemplate={selectedTemplate}  handleSubmit={handleSubmit}  enableEditMode={enableEditMode}/>
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

