import React, {Component} from 'react';

class Reset extends Component{

    onResetDefault = () => {
        this.props.onSettingDefautlt(true);
    }
    render(){
        return (
   			<button type='reset' className="btn btn-default" onClick={this.onResetDefault}>Reset</button>
  		);
    }
}
export default Reset;
