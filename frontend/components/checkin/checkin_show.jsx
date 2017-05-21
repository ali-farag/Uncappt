import React from 'react';
import CheckinIndexItemContainer from './checkin_index_item_container';
import NavBarContainer from '../nav_bar_container';
import Footer from '../footer';

class CheckinShow extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchOneCheckin(this.props.match.params.checkinId);
  }

  render(){
    console.log(this.props.checkin);
    if(this.props.checkin.id){
      return (
        <div>
          <NavBarContainer history={this.props.history} />
          <div className="checkin-show-box">
            <CheckinIndexItemContainer path="show" checkin={this.props.checkin} history={this.props.history}/>
          </div>
          <Footer />
        </div>
      );
    }
    else{
      return (
        <div>
          <NavBarContainer history={this.props.history} />
          <p>Checkin not found</p>
          <Footer />
        </div>
      );
    }

  }
}

export default CheckinShow;
