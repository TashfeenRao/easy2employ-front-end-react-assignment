import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PreviewTitles from '../presentational/PreviewTitles';

const TitleFetcher = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [links, setLinks] = useState([]);


  const handleTitleForm = async (evt) => {
    setLoading(true)
    console.log(JSON.stringify({text}))
    evt.preventDefault();
      const res = await fetch('http://localhost:5001/web-scraper-73ae9/us-central1/scraper', { 
        method: 'POST', 
        body: JSON.stringify({text})
    });

    const data = await res.json();
    setLinks(data);
    setLoading(false)
  }
  const handleTitleChange = (e) => {
    setText(e.target.value)
}

return (
  <div>
    <Form onSubmit={handleTitleForm}>
      <Form.Group>
        <Form.Label>URL for Website</Form.Label>
        <Form.Control
          type="inputurl"
          as="textarea"
          name="text"
          placeholder="Enter website urls"
          onChange={handleTitleChange}
          required
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Get Titles
      </Button>
    </Form>
    
    {loading &&  <h3>Fetching titles previews...</h3> }


    {links.map(obj => <PreviewTitles key={obj.url} linkData={obj} />) }
  </div>
);

} 

export default TitleFetcher