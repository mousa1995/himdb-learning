import React from 'react';
import './SearchBar.css';
import FontAwsome from 'react-fontawesome';

class SearchBar extends React.Component {
  
  state = {
    value: '',
  }
  
  render(){
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">
          <FontAwsome className="rmdb-fa-search" name="search" size="2x"/>
          {/* نامی که در فونت اوسام رد شده مال خود فونت اوسام است و کلاس رو خودش نوشته*/}
          <input 
          type="text"
          className="rmdb-searchbar-input"
          placeholder="Search"
          onChange={this.doSearch}
          value={this.setState({value})}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar;