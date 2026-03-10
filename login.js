export default function handler(req, res) {

if (req.method !== "POST") {
return res.status(405).json({ message: "Method not allowed" });
}

const { email, password } = req.body;

if (!email || !password) {
return res.status(400).json({ message: "Email and password required" });
}

return res.status(200).json({
message: "Login API working",
email: email
});

  }
