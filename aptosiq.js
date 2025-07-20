
export default async function handler(req, res) {
  const query = req.query.query || "Hello";
  
  // Simple Aptos API example
  if (query.toLowerCase().includes("aptos")) {
    try {
      const response = await fetch("https://fullnode.mainnet.aptoslabs.com/v1/blocks?limit=1");
      const json = await response.json();
      return res.status(200).json({ answer: "Latest Aptos block: " + JSON.stringify(json) });
    } catch (e) {
      return res.status(500).json({ answer: "Error fetching Aptos data." });
    }
  }

  // Simple fallback AI-like response
  return res.status(200).json({ answer: "AptosIQ says: " + query + " (This is a sample response!)" });
}
