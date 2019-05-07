import React, {Component} from 'react';
class Setting extends Component{
    changeSize(value){
        // console.log(value);
        this.props.onChangeSize(value);
    }
    render(){
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                     Size : {this.props.fontSize}
                </div>
                    <div className="panel-body">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={()=>this.changeSize(2)}
                        >
                            Tăng ^
                        </button>
                    <button
                        type="button"
                        className="btn btn-default ml-5"
                        onClick={()=>this.changeSize(-2)}
                    >Giảm v</button>
                </div>
            </div>
        );
    }
  
}

export default Setting;

