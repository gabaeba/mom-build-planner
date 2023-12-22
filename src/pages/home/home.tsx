import React from 'react'
import { Link } from 'react-router-dom'

const home = () => {
  return (
    <>
    <div>AQUI É A HOME</div>
    <div><Link to="/lordKnight">lk</Link></div>
    <div><Link to="/paladin">PALA</Link></div>
    <div><Link to="/highWizard">hw</Link></div>
    <div><Link to="/professor">PROF</Link></div>
    <div><Link to="/sniper">sniper</Link></div>
    <div><Link to="/clown">clown</Link></div>
    <div><Link to="/gypsy">gypsy</Link></div>
    <div><Link to="/whitesmith">WS</Link></div>
    <div><Link to="/creator">creator</Link></div>
    <div><Link to="/assassinCross">sinX</Link></div>
    <div><Link to="/stalker">stalker</Link></div>
    <div><Link to="/highPriest">HP</Link></div>
    <div><Link to="/champion">Champion</Link></div>
    </>
  )
}

export default home