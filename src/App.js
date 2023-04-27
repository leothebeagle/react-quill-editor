import MessageEditor from './MessageEditor'
import { Container } from '@mui/material';
import DOMPurify from 'dompurify';

const App = () => {

  const [mode, setMode] = useState('create');
  const [selectedTemplate] = useState(null);

  const handleSubmit = async (content) => {
    const sanitizedHtmlContent = DOMPurify.sanitize(content);

    const payload = {
      htmlContent: sanitizedHtmlContent,
    };

    console.log("payload: " + payload.htmlContent)

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


  return (
    <Container>
      <MessageEditor handleSubmit={handleSubmit} />
    </Container>
  )
}


export default App;
