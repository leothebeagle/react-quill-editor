import React, {useState, useEffect} from 'react';
import MessageEditor from './MessageEditor'
import { Container } from '@mui/material';
import DOMPurify from 'dompurify';

const App = () => {

  const [mode, setMode] = useState('create');
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [resourcesIndex, setResourcesIndex] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setResourcesIndex(data);
    }

    fetchData();
  }, []);


  const handleSubmit = async (content) => {
    const sanitizedHtmlContent = DOMPurify.sanitize(content);

    const payload = {
      htmlContent: sanitizedHtmlContent,
    };

    console.log("payload: " + payload.htmlContent)
    //to be changed to actually send off a 
    mode === 'create' ? console.log('Template submitted successfully') : console.log('Template SAVED successfully ~~')
    setMode('view')
    setSelectedTemplate(content)
    console.log("mode before render happens is: " + mode)
    console.log("selected template before the render is: " + selectedTemplate)
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

