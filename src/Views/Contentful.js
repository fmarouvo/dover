import React, { useState, useEffect } from 'react';
import { createClient } from 'contentful';

const client = createClient({
  space: 'dover',
  accessToken: ''
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
  }, []);

  const handleButtonClick = async () => {
    const data = await fetchContent();
    setContent(data);
  };

  return (
    <div>
      <div className="patient-container">
        <button onClick={handleButtonClick}>Buscar Dados</button>
      </div>

      <div>
        {content.map(item => (
          <div key={item.sys.id}>
            <h2>{item.fields.id}</h2>
            {/* Verifica se 'name' existe antes de renderizar */}
            <p>{item.fields.name ? item.fields.name : "Nome não disponível"}</p>
            {/* Renderizar outros campos conforme necessário */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContentfulContent;