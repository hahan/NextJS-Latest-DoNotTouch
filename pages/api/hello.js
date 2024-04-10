export default function handler(req, res) {
  fetch('https://mj2ae52fvarhjtek6eywhoktcu0yvqrb.lambda-url.us-west-1.on.aws')
  .then((response) => response.json())
  .then((data) => res.status(200).json({
                    text: data,
                  }));
}
