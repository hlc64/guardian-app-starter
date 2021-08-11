import axios from 'axios';

const searchHandler = async(req, res) => {

  const searchResults = await axios.get('https://content.guardianapis.com/search?', {
    params: {
      'api-key': process.env.GUARDIAN_API_KEY,
    }
  })

  const apiResults = searchResults.data.response.results.map(result => {
    return {
      title: result.webTitle,
      url: result.webUrl,
    }
  })

  res.status(200).json(apiResults);
}

export default searchHandler;