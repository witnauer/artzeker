import { useState } from 'react';

export function useFetchArtist() {
  // const [artist, setArtist] = useState(null);
  // const [loading, setLoading] = useState(true);

  // const fetchArtist = async () => {
  // 	const response = await fetch('/api/artist');
  // 	const data = await response.json();
  // 	setArtist(data);
  // 	setLoading(false);
  // };

  // if (loading) {
  // 	fetchArtist();
  // }
  const artist = {
    name: 'Dennis Witnauer',
    email: 'jdoe@email.net',
    artworks: [
      {
        title: 'Artwork 1',
        description: 'This is the first artwork',
        artworkUrl: 'https://via.placeholder.com/300',
      },
      {
        title: 'Artwork 2',
        description: 'This is the second artwork',
        artworkUrl: 'https://via.placeholder.com/300',
      },
      {
        title: 'Artwork 3',
        description: 'This is the third artwork',
        artworkUrl: 'https://via.placeholder.com/300',
      },
      {
        title: 'Artwork 4',
        description: 'This is the fourth artwork',
        artworkUrl: 'https://via.placeholder.com/300',
      },
    ],
    statement: 'This is the statement',
    resume: 'This is the resume',
    social: {
      facebook: 'https://www.facebook.com/johndoe',
      instagram: 'https://www.instagram.com/johndoe',
      twitter: 'https://www.twitter.com/johndoe',
      youtube: 'https://www.youtube.com/johndoe',
    },
    contact: {
      phone: '+1 (123) 456-7890',
      city: 'New York',
      state: 'NY',
      country: 'USA',
      address: '123 Main St',
      zip: '12345',
    },
  };

  return artist;
}
