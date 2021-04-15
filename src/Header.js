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
            <h2>Veg Curious (noun)</h2>
            <ol>
              <li>Someone who is interested in eating more plant-based food, or considering going vegetarian/vegan</li>
              <li>An app that makes searching for plant-based recipes easy and stress-free!</li>
            </ol>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;