import headerimage from "./assets/headerimage.png"


const Header = () => {
  return (
    <header>
        <img className="headerImage" src={headerimage} alt="App logo" />
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium voluptate ut quae temporibus, tempora libero? Hic deserunt nisi qui esse porro, aperiam vel ullam facilis ipsum ducimus enim. Quisquam, aperiam.</p>
    </header>
  )
}

export default Header;