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
