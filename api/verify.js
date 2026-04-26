export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  const { code } = req.body;

  const validCodes = [
    "1234567890123456",
    "ABCD1234",
    "A9999999"
  ];

  const isValid = validCodes.includes(code);

  return res.status(200).json({ success: isValid });
}
