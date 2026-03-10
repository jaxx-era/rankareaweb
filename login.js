export default function handler(req, res) {

if (req.method === "GET") {
return res.status(200).json({
message: "Login API working"
});
}

if (req.method === "POST") {

const { email, password } = req.body;

return res.status(200).json({
message: "Login success",
email: email
});

}

}
