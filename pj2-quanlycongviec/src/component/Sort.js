import React, {Component} from 'react';
class Sort extends Component {
    render() {
        return (
            <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2 mgt-10">
                <div className="dropdown">
                    <button 
                        className="btn btn-default dropdown-toggle" 
                        type="button" 
                        id="dropdownMenu1" 
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="true"
                        >
                            Dropdown
                        <span className="caret"></span>
                    </button>
                   {/* <ul className="dropdown-menu" 
                    aria-labelledby="dropdownMenu1">
                        <li><a role="button" className="sort_selected">Action</a></li>
                        <li><a >Another action</a></li>
                    </ul*/}
                </div>
            </div>
        );
    }
}

export default Sort;
