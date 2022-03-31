import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false
    };
    this.openMenu = this.openMenu.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }

  openMenu() {
    this.setState({
      showMenu: true
    });
  }

  selectItem() {
    this.setState({
      showMenu: false
    });
  }

  drawerHidden() {
    return (
      this.state.showMenu
        ? ''
        : 'hidden'
    );
  }

  render() {
    const hideDrawer = this.drawerHidden();
    return (
      <div className='background-img'>
        <div>
          <i onClick={this.openMenu} className="icon fas fa-bars"></i>
        </div>
        <div>
          <div onClick={this.selectItem} className={`drawer-overlay ${hideDrawer}`}>
            <div className='drawer-modal'>
              <h2 className='menu'>Choose a Character</h2>
              <ul>
                <li><a onClick={this.drawerHidden}>Good Boi Gon</a></li>
                <li><a onClick={this.drawerHidden}>Best Boi Killua</a></li>
                <li><a onClick={this.drawerHidden}>Creepy Boi Hisoka</a></li>
                <li><a onClick={this.drawerHidden}>Revengeful Boi Kurapika</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AppDrawer;
