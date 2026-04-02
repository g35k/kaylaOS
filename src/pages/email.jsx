import { useState } from 'react'
import Sidebar from '../components/sidebar/sidebar'
import Navbar from '../components/navbar/navbar'
import BottomNav from '../components/bottom/bottomNav'
import '../components/email.css'

const TO_ADDRESS = 'kayla.garibay31@gmail.com'

export default function Email() {
  const [subject, setSubject] = useState('')
  const [body, setBody] = useState('')
  const [sent, setSent] = useState(false)

  function handleSend() {
    if (!subject.trim() && !body.trim()) return
    const mailto =
      `mailto:${TO_ADDRESS}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <>
      <Navbar />
      <div className="finderBody">
        <Sidebar />
        <div className="emailContent">

          {/* Toolbar */}
          <div className="emailToolbar">
            <div className="emailToolbarLeft">
              <span className="emailToolbarFilename">✉️ New Message</span>
            </div>
            <div className="emailToolbarRight">
              <button
                className={`emailSendBtn${sent ? ' emailSendBtnSent' : ''}`}
                onClick={handleSend}
              >
                {sent ? '✓ Opening Mail…' : 'Send'}
              </button>
            </div>
          </div>

          {/* Compose card */}
          <div className="emailViewerWrapper">
            <div className="emailComposeCard">

              {/* To — locked */}
              <div className="emailFieldRow emailFieldRowTo">
                <span className="emailFieldLabel">To:</span>
                <span className="emailToChip">{TO_ADDRESS}</span>
              </div>

              <div className="emailFieldDivider" />

              {/* Subject */}
              <div className="emailFieldRow">
                <label className="emailFieldLabel" htmlFor="emailSubject">Subject:</label>
                <input
                  id="emailSubject"
                  className="emailFieldInput"
                  type="text"
                  placeholder="What's this about?"
                  value={subject}
                  onChange={e => setSubject(e.target.value)}
                  maxLength={120}
                />
              </div>

              <div className="emailFieldDivider" />

              {/* Body */}
              <textarea
                className="emailBodyTextarea"
                placeholder="Write your message here…"
                value={body}
                onChange={e => setBody(e.target.value)}
              />

            </div>
          </div>

        </div>
      </div>
      <BottomNav itemCount={1} />
    </>
  )
}
