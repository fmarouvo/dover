import React from 'react';
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

function Home() {
  return (
    <div>
	 <div className="patient-container">
           <button onClick={fetchContent}>Buscar Dados</button>
       </div>
      <h1>Bem-vindo à Clínica Oftalmológica Visão Clara</h1>
      <p>Sua visão é nossa prioridade. Oferecemos uma variedade de serviços oftalmológicos para cuidar da saúde dos seus olhos.</p>
      <h2>Nossos Serviços</h2>
      <ul>
        <li>Consultas de rotina</li>
        <li>Exames de vista</li>
        <li>Tratamento de doenças oculares</li>
        <li>Óculos e lentes de contato</li>
        <li>Cirurgias oftalmológicas</li>
      </ul>
      <h2>Horário de Funcionamento</h2>
      <p>Estamos abertos de segunda a sexta-feira, das 8h às 18h. Entre em contato para agendar sua consulta.</p>
      <h2>Contato</h2>
      <p>Telefone: (XX) XXXX-XXXX</p>
      <p>Email: contato@clinicavisaoclara.com</p>
      <p>Endereço: Rua dos Oftalmologistas, 123 - Bairro da Visão - Cidade - Estado</p>
    </div>
  );
}

export default Home;

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