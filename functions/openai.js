const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  const openaiApiKey = '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';

  const response = await fetch('https://api.openai.com/v1/engines/davinci-codex/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${openaiApiKey}`,
    },
    body: event.body,
  });

  const data = await response.json();
  return {
    statusCode: response.status,
    body: JSON.stringify(data),
  };
};
