// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body

    const tmMessage = `<b>Name:</b> ${name} 
<b>Phone:</b> ${phone} 
<b>Email:</b> ${email} 
<b>Message:</b> ${message}`

    const urlEncodedMessage = encodeURIComponent(tmMessage)
    axios
      .get(
        `https://api.telegram.org/bot${process.env.TMBOT}/sendMessage?chat_id=${process.env.TMCHADID}&text=${urlEncodedMessage}&parse_mode=HTML`
      )
      .then((response) => res.status(200).json({ info: 'Success' }))
      .catch((err) => {
        res.status(500).json({ error: err.description })
      })
  }
}
