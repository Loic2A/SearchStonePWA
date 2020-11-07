'use strict';

const e = React.createElement;

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event){
    alert('C bon');
    event.preventDefault();
  }

  render() {
    return e(
      <form onSubmit={this.handleSubmit}>
        <select id="clas">
          <option value="">Choisir</option>
          <option value="Hunter">Hunter</option>
          <option value="Mage">Mage</option>
          <option value="Paladin">Mage</option>
          <option value="Priest">Mage</option>
          <option value="Rogue">Mage</option>
          <option value="Shaman">Mage</option>
          <option value="Warlock">Mage</option>
          <option value="Warrior">Mage</option>
          <option value="Dream">Mage</option>
        </select>
        <select id="set">
          <option value="">Choisir</option>
          <option value="Basic">Basic</option>
          <option value="Classic">Classic</option>
          <option value="Credits">Credits</option>
          <option value="Naxxramas">Naxxramas</option>
          <option value="Debug">Debug</option>
          <option value="Goblins vs Gnomes">Goblins vs Gnomes</option>
          <option value="Missions">Missions</option>
          <option value="Promotion">Promotion</option>
          <option value="Reward">Reward</option>
          <option value="System">System</option>
          <option value="Blackrock Mountain">Blackrock Mountain</option>
          <option value="Hero Skins">Hero Skins</option>
          <option value="Tavern Brawl">Tavern Brawl</option>
          <option value="The Grand Tournament">The Grand Tournament</option>
        </select>
        <select id="type">
          <option value="">Choisir</option>
          <option value="Hero">Hero</option>
          <option value="Minion">Minion</option>
          <option value="Spell">Spell</option>
          <option value="Enchantment">Enchantment</option>
          <option value="Weapon">Weapon</option>
          <option value="Hero Power">Hero Power</option>
        </select>
        <select id="faction">
          <option value="">Choisir</option>
          <option value="Horde">Horde</option>
          <option value="Alliance">Alliance</option>
          <option value="Neutral">Neutral</option>
        </select>
        <select id="quality">
          <option value="">Choisir</option>
          <option value="Free">Free</option>
          <option value="Common">Common</option>
          <option value="Rare">Rare</option>
          <option value="Epic">Epic</option>
          <option value="Legendary">Legendary</option>
        </select>
        <select id="race">
          <option value="">Choisir</option>
          <option value="Demon">Demon</option>
          <option value="Dragon">Dragon</option>
          <option value="Mech">Mech</option>
          <option value="Murloc">Murloc</option>
          <option value="Beast">Beast</option>
          <option value="Pirate">Pirate</option>
          <option value="Totem">Totem</option>
        </select>
      </form>
    );
  }
}

const domContainer = document.querySelector('#sidebar');
ReactDOM.render(e(Sidebar), domContainer);