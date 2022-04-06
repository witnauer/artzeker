exports.handler = async (event, context) => {
  const portfolio = {
    artistID: '123456789',
    artistName: 'Dennis Witnauer',
    artwork: [
      {
        title: 'De la Luna',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget consectetur nisl nisl eget consectetur tempor.',
        image:
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      },
      {
        title: 'Un Espciale',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget consectetur nisl nisl eget consectetur tempor.',
        image:
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      },
      {
        title: 'Tu de Fiore',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget consectetur tempor, nisi nisl aliquam eros, eget consectetur nisl nisl eget consectetur tempor.',
        image:
          'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      },
    ],
  };

  return {
    statusCode: 200,
    body: JSON.stringify(portfolio),
  };
};
