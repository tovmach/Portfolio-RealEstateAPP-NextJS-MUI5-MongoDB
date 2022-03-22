// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from 'axios'
import { google } from 'googleapis'

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, phone, message } = req.body

    let d = new Date()
    let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
    let mo = new Intl.DateTimeFormat('en', { month: 'short' }).format(d)
    let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)

    let time = d.getUTCHours() + 1 + ':' + d.getUTCMinutes()

    const todayDate = `${da}-${mo}-${ye} ${time}`

    const target = ['https://www.googleapis.com/auth/spreadsheets']
    const jwt = new google.auth.JWT(
      process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
      null,
      (process.env.GOOGLE_SHEETS_PRIVATE_KEY || '').replace(/\\n/g, '\n'),
      target
    )

    const sheets = google.sheets({ version: 'v4', auth: jwt })

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
      range: 'Data', // sheet name
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[todayDate, name, email, phone, message]],
      },
    })

    const tmMessage = `<b>Date:</b> ${todayDate}
<b>Name:</b> ${name}
<b>Phone:</b> ${phone}
<b>Email:</b> ${email}
<b>Message:</b> ${message}`

    const urlEncodedMessage = encodeURIComponent(tmMessage)
    axios
      .get(
        `https://api.telegram.org/bot${process.env.TELEGRAM_BOT}/sendMessage?chat_id=${process.env.TELEGRAM_CHADID}&text=${urlEncodedMessage}&parse_mode=HTML`
      )
      .then((response) => res.status(200).json({ info: 'Success' }))
      .catch((err) => {
        res.status(500).json({ error: err.description })
      })
  }
}
