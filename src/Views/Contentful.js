import React, { useState, useEffect } from 'react';
import { fetchContent } from './contentfulService';

function ContentfulContent() {
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getContent = async () => {
      const data = await fetchContent();
      setContent(data);
    };

    getContent();
  }, []);

  return (
    <div>
      {content.map(item => (
        <div key={item.sys.id}>
          <h2>{item.fields.title}</h2>
          <p>{item.fields.description}</p>
          {/* Renderizar outros campos conforme necessário */}
        </div>
      ))}
    </div>
  );
}

export default ContentfulContent;