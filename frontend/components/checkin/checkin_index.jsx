import React from 'react';
import NavBarContainer from '../nav_bar_container';
import CheckinIndexItem from './checkin_index_item';

class CheckinIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllCheckins();
  }

  render(){
    let checkins;
    if(this.props.checkins[0]){
      checkins = this.props.checkins.map((checkin, idx) =>(
        <CheckinIndexItem history={this.props.history} key={idx} checkin={checkin} />
      ));
      return (
        <div>
          <ul>
            <div className="all-the-checkins">
              <h1>Global Checkins</h1>
            </div>
            {checkins}
          </ul>
        </div>
      );
    }
    else{
      return <div></div>;
    }
  }
}

export default CheckinIndex;