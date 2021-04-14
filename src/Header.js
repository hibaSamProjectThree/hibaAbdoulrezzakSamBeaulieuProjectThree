import backgroundLogo from './assets/backgroundLogo.png';


const Header = () => {
  return (
    <header>
      <div className="logoDiv">
          <img className="headerImage" src={backgroundLogo} alt="App logo" />
          <h1>Veg Curious</h1>
        </div>
      <p>Veg Curious - an app for those interested in incorporating more plant-based meals into their daily, weekly, or monthly schedules!  Blah blah.</p>
    </header>
  )
}

export default Header;