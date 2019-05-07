import React, {Component} from 'react';
class ColorPicker extends Component{
    constructor(props){
        super(props);
        this.state={
            colors : [
                "red",
                "green",
                "blue",
                "#ccc"
            ]
        }
    }

    // hien thi color
    showColor(color){
        console.log(this.props.color);
        return {
            backgroundColor : color,
        }
    }
    // trả data cho thằng cha App (onReceiveColor)
    setActiveColor(color){
            // console.log(color);
        this.props.onReceiveColor(color);
    }
    render(){
        var elements = this.state.colors.map((color,index)=>{
            return <span
                key={index} className={this.props.color === color ? 'active color' : 'color'}
                style={this.showColor(color)}
                onClick={() =>this.setActiveColor(color)}
            >
            </span>
        });
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                                Color Picker
                    </div>
                    <div className="panel-body">
                        {elements}
                    </div>
                    <hr/>
                </div>
            </div>
        );
    }
  
}

export default ColorPicker;

