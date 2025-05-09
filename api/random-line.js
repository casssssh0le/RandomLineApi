export default async function handler(req, res) {
  const fileUrl = "https://gist.githubusercontent.com/casssssh0le/232a1529a030ad79fd09319f308790f7/raw/4af18f9552bbc9c9a78be13e8d0185c76c00cfac/gistfile1.txt";
  const response = await fetch(fileUrl);
  const text = await response.text();
  const lines = text.split('\n').filter(line => line.trim() !== '');
  const randomLine = lines[Math.floor(Math.random() * lines.length)];
  res.status(200).send(randomLine);
}
