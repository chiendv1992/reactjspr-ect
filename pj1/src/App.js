import React, {Component} from 'react';
import './App.css';
import ColorPicker from "./component/ColorPicker";
import Setting from "./component/Setting";
import Reset from "./component/Reset";
import Result from "./component/Result";

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            color : 'red',
            fontsize : 15
        }
        this.onSetColor=this.onSetColor.bind(this);
    }

    //lấy data từ thằng con gán prams
   // set lại color dc lấy từ thằng con
   onSetColor(params){
        this.setState({
            color: params
        });
    }
    render(){
        return(
            <div className="container">
                <div className="row">
                    {/*onReceiveColor nhan data tu thang con sang thang cha*/}
                    <ColorPicker color = {this.state.color} onReceiveColor={this.onSetColor}/>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <Setting />
                        <Reset />
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                       <Result color={this.state.color} />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
