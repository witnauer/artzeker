exports.handler = async (event, context) => {
  const user = context.clientContext.user;
  console.log('Identity function', user);
  if (user) {
    return {
      statusCode: 200,
      body: JSON.stringify(user),
    };
  }

  return {
    statusCode: 401,
    body: JSON.stringify({ mssg: 'There has been a login error' }),
  };
};
