import React, {Component} from 'react';
import Search from './Search';
import Sort from './Sort';
class Controll extends Component {
    render() {
        return (
            <div>
	            <Search/>
	            {/*dropdown*/}
	            <Sort/>
            </div>

        );
    }
}

export default Controll;
