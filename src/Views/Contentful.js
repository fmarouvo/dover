import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: 'dover',
  accessToken: 'CFPAT-6yXzEr42SxJ2jULTIQgzqfIgph6UKA0gorgdbI7wARQ'
});

const fetchContent = async () => {
  try {
    const response = await client.getEntries();
    return response.items;
  } catch (error) {
    console.error('Error fetching content:', error);
    return [];
  }
};

function ContentfulContent() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getContent = async () => {
      const data = await fetchContent();
      setContent(data);
    };

    getContent();
	console.log("CONTENT");
  }, []);

  return (
	<div>
		<div className="patient-container">
			<button onClick={ContentfulContent}>Buscar Dados</button>
		</div>
	  
		<div>
		  {content.map(item => (
			<div key={item.sys.id}>
			  <h2>{item.fields.id}</h2>
			  <p>{item.fields.name}</p>
			  {/* Renderizar outros campos conforme necessário */}
			</div>
		  ))}
		</div>
	</div>
  );
}

export default ContentfulContent;