import { useState } from 'react'
import './App.css'

const moods = [
  { label: 'Low', value: 'low', icon: '☁', detail: 'Taking it easy today' },
  { label: 'Okay', value: 'okay', icon: '◒', detail: 'Ready for a steady session' },
  { label: 'Strong', value: 'strong', icon: '✦', detail: 'Feeling ready to push' },
]

const sessions = {
  low: { title: 'Reset & restore', tag: 'Gentle', duration: '18 min', copy: 'A low-pressure reset for days when your battery needs a little kindness.' },
  okay: { title: 'Steady strength', tag: 'Balanced', duration: '28 min', copy: 'A feel-good full-body session that builds momentum without draining you.' },
  strong: { title: 'Build your edge', tag: 'Challenge', duration: '36 min', copy: 'A purposeful strength circuit for the energy you have right now.' },
}

function App() {
  const [mood, setMood] = useState('okay')
  const [soreness, setSoreness] = useState(2)
  const [completed, setCompleted] = useState(false)
  const session = sessions[mood]
  const recoveryMessage = soreness >= 4 ? 'Your body is asking for recovery today.' : soreness >= 3 ? 'Keep the effort gentle and give tight spots room.' : 'You have room for a little more challenge today.'

  return (
    <main className="app-shell">
      <nav className="topbar" aria-label="Main navigation">
        <a className="brand" href="/" aria-label="Pulse home"><span className="brand-mark">+</span> pulse</a>
        <div className="nav-links"><a className="active" href="#today">Today</a><a href="#journal">Journal</a><a href="#progress">Progress</a></div>
        <button className="profile-button" type="button" aria-label="Open profile">◉</button>
      </nav>

      <section className="intro" id="today">
        <div><p className="eyebrow">Your fitness check-in</p><h1>Move with intention<span className="period">.</span></h1><p className="intro-copy">Let&apos;s meet your body where it is today.</p></div>
        <div className="streak"><span className="streak-flame">✦</span><div><strong>8 day</strong><span>movement streak</span></div></div>
      </section>

      <section className="check-in" id="journal">
        <div className="section-heading"><div><p className="eyebrow">Your check-in</p><h2>How are you feeling?</h2></div><span className="step-count">01 / 02</span></div>
        <div className="mood-grid">{moods.map((item) => <button className={`mood-card ${mood === item.value ? 'selected' : ''}`} key={item.value} type="button" onClick={() => { setMood(item.value); setCompleted(false) }}><span className="mood-icon">{item.icon}</span><span className="mood-label">{item.label}</span><span className="mood-detail">{item.detail}</span><span className="radio" aria-hidden="true" /></button>)}</div>
        <div className="soreness-row"><div><label htmlFor="soreness">Any soreness?</label><p>Be honest, this is how we keep you moving well.</p></div><div className="slider-wrap"><input id="soreness" type="range" min="1" max="5" value={soreness} onChange={(event) => setSoreness(Number(event.target.value))} /><div className="slider-labels"><span>Fresh</span><strong>{soreness} / 5</strong><span>Very sore</span></div></div></div>
      </section>

      <section className="user-model" aria-labelledby="model-heading">
        <div className="model-heading"><div><p className="eyebrow">Your adaptive profile</p><h2 id="model-heading">What Pulse is using</h2></div><span className="model-status"><span /> Updated just now</span></div>
        <p className="model-intro">Your answers shape today&apos;s plan. Nothing is permanent; check in again whenever your body changes.</p>
        <div className="signal-grid">
          <div className="signal"><span className="signal-number">{mood === 'low' ? '01' : mood === 'strong' ? '03' : '02'}</span><div><strong>Energy level</strong><span>{mood} today</span></div></div>
          <div className="signal"><span className="signal-number">{soreness}/5</span><div><strong>Recovery need</strong><span>{soreness >= 4 ? 'High priority' : soreness >= 3 ? 'Keep it gentle' : 'Low priority'}</span></div></div>
          <div className="signal"><span className="signal-number">↗</span><div><strong>Plan preference</strong><span>{soreness >= 4 ? 'Mobility first' : 'Build consistency'}</span></div></div>
        </div>
        <div className="rules"><span className="rules-label">Active rules</span><span><b>If</b> energy is low <i>→</i> shorten and soften</span><span><b>If</b> soreness is high <i>→</i> prioritize recovery</span></div>
      </section>

      <section className="recommendation" id="progress">
        <div className="recommendation-copy"><div className="section-heading"><div><p className="eyebrow warm">Made for you today</p><h2>{session.title}</h2></div><span className="session-tag">{session.tag}</span></div><p>{session.copy}</p><div className="session-meta"><span>◷ {session.duration}</span><span>◌ {soreness >= 4 ? 'Recovery focus' : 'Full body'}</span><span>♧ No equipment</span></div><button className="primary-action" type="button" onClick={() => setCompleted(!completed)}>{completed ? 'Session saved ✓' : 'Start this session'} <span>→</span></button></div>
        <div className="session-art" aria-hidden="true"><div className="sun" /><div className="art-line line-one" /><div className="art-line line-two" /><div className="art-person"><span className="head" /><span className="body" /><span className="arm" /><span className="leg" /></div><span className="art-caption">{soreness >= 4 ? 'softly does it' : 'show up as you are'}</span></div>
      </section>

      <section className="insight-card"><span className="insight-icon">↗</span><div><p className="eyebrow">A note from your coach</p><p>{recoveryMessage} Small, consistent choices count more than perfect workouts.</p></div></section>
      <footer><span>pulse / your pace, your practice</span><span>Designed for real life <span className="heart">♥</span></span></footer>
    </main>
  )
}

export default App
