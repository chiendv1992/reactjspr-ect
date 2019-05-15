import React, {Component} from 'react';

class Search extends Component {
    render() {
        return (
            <div>
	            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mgt-10">
	                <div className="input-group">
	                    <input type="text" className="form-control" placeholder="Search for..."/>
	                    <span className="input-group-btn">
	                        <button className="btn btn-primary" type="button">Search!</button>
	                    </span>
	                </div>
	            </div>	            
            </div>

        );
    }
}

export default Search;
