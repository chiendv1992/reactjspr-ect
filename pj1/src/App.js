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
            fontSize : 12
        }
        this.onSetColor = this.onSetColor.bind(this);
        this.onChangeSize = this.onChangeSize.bind(this);
        this.onSettingDefautlt = this.onSettingDefautlt.bind(this);
    }

    //lấy data từ thằng con gán prams
   // set lại color dc lấy từ thằng c
   onSetColor(params){
        this.setState({
            color: params
        });
    }

    //
   onChangeSize(value){
        if (this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36) {
            this.setState({
                fontSize: this.state.fontSize + value
            });
        }
   }

    // chuc nang resset
    onSettingDefautlt(value){
        console.log(value);
        if (value){
            this.setState({
                color : 'red',
                fontSize : 12
            });
        }
    }
   render() {
       return (
           <div className="container">
               <div className="row">
                   {/*onReceiveColor nhan data tu thang con sang thang cha*/}
                   <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor}/>
                   <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                       <Setting fontSize={this.state.fontSize}
                            onChangeSize={this.onChangeSize}
                       />
                       <Reset onSettingDefautlt={this.onSettingDefautlt}/>
                   </div>
                   <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                       <Result fontSize={this.state.fontSize} color={this.state.color}/>
                   </div>
               </div>
           </div>
       );
   }
}
export default App;
