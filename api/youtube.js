export default async function handler(req, res) {
    const PLAYLIST_ID = 'PLPkGm97cdEBiBxVLrVa4RSJjTbLDvgQPB';
    
    const API_KEY = process.env.YOUTUBE_API_KEY; 
  
    if (!API_KEY) {
      return res.status(500).json({ error: 'API key is missing' });
    }
  
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
      );
      const data = await response.json();
  
      // Cache the results for 1 hour (3600 seconds)
      res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
      res.status(200).json(data);
      
    } catch (error) {
      console.error("Server Error:", error);
      res.status(500).json({ error: 'Failed to fetch YouTube data' });
    }
  }