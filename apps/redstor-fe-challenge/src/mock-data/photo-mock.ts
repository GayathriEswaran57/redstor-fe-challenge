export const mockPhotosResponse = [
  {
    id: '980',
    width: 800,
    height: 600,
    color: '#ffffff',
    description: 'A beautiful sunset',
    alt_description: 'Sunset over the mountains',
    urls: {
      raw: 'https://example.com/raw.jpg',
      full: 'https://example.com/full.jpg',
      regular: 'https://example.com/regular.jpg',
      small: 'https://example.com/small.jpg',
      thumb: 'https://example.com/thumb.jpg',
      small_s3: 'https://example.com/small_s3.jpg'
    },
    links: {
      self: 'https://example.com/photo/1',
      html: 'https://example.com/photo/1',
      download: 'https://example.com/photo/1/download',
      download_location: 'https://example.com/photo/1/download_location'
    },
    user: {
      id: 'user123',
      username: 'john_doe',
      name: 'John Doe',
      first_name: 'John',
      last_name: 'Doe',
      profile_image: {
        large: 'https://example.com/profile/large.jpg',
        medium: 'https://example.com/profile/medium.jpg',
        small: 'https://example.com/profile/small.jpg'
      },
      portfolio_url: 'https://example.com/portfolio',
      location: 'UK'
    },
    likes: 150,
    views: 2000
  }
];
