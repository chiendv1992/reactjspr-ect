import React, {Component} from 'react';
class Setting extends Component{
    render(){
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                     Size
                </div>
                    <div className="panel-body">
                        <button type="button" className="btn btn-primary">Tăng ^</button>                         
                    <button type="button" className="btn btn-default ml-5">Giảm v</button>
                </div>
            </div>
        );
    }
  
}

export default Setting;

