const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  const user = event.queryStringParameters.user;

  if (!user) {
    return {
      statusCode: 400,
      body: "Missing 'user' query param"
    };
  }

  try {
    const response = await fetch(`https://github.com/users/${user}/contributions`);
    const html = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*", 
        "Content-Type": "text/html"
      },
      body: html
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: "Error fetching GitHub contributions"
    };
  }
};
