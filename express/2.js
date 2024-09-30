const fetchGitHubUser = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching the GitHub user data:', error);
    }
  };
  
  // Example usage:
  fetchGitHubUser('octocat');
  