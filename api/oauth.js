export default function handler(req, res) {
  const CLIENT_KEY = 'your_client_key'; // Replace with your TikTok client key
  const REDIRECT_URI = 'https://your-vercel-url.vercel.app/api/oauth/callback'; // Replace with your registered redirect URI
  const csrfState = Math.random().toString(36).substring(2);
  res.cookie('csrfState', csrfState, { maxAge: 60000 });
  const url = new URL('https://www.tiktok.com/v2/auth/authorize/');
  url.searchParams.set('client_key', CLIENT_KEY);
  url.searchParams.set('scope', 'user.info.basic');
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('redirect_uri', REDIRECT_URI);
  url.searchParams.set('state', csrfState);
  // res.redirect(url.toString());
  res.status(200).json({ message: 'Hello from oauth' });
}