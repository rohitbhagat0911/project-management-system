import './Menu.css'

const Menu = () => {
  return (<div>

      <div className="upr">
      <header class="header">
        <a href="/" class="logo">CORP</a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="nav-icon"></span></label>
        <ul class="menu">
            <li><a href="#dont">Follow</a></li>
            <li><a href="#forget">Andrew</a></li>
        </ul>
    </header>


      </div>
  </div>);
};

export default Menu;
