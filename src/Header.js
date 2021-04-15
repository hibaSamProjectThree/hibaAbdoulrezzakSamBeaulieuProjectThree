import backgroundLogo from './assets/backgroundLogo.png';


const Header = () => {
  return (
    <header>
      <div className="wrapper">
        <div className="headerFlexContainer">
          <div className="logoDiv">
            <img className="headerImage" src={backgroundLogo} alt="App logo" />
            <h1>Veg Curious</h1>
          </div>
          <div className="headerText">
            <h2>Veg Curious</h2>
            <ol>
              <li>(adjective) Interested in eating more plant-based food </li>
              <li>(noun) An app that makes searching for plant-based recipes easy and stress-free!</li>
            </ol>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;