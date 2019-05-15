import React, {Component} from 'react';
class List extends Component {
    render() {
        return (
    		<table className="table table-horver">
                <thead>
                    <tr>
                        <th>stt</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            <input 
                                type="text" 
                                name="" id="input" 
                                className="form-control" 
                                pattern="" 
                                title=""/>
                        </td>
                        <td>
                            <select name="" id="input" className="form-control" required="required">
                                <option value="">all</option>
                                <option value="">1</option>
                                <option value="">2</option>
                            </select>
                        </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>name</td>
                        <td>status</td>
                        <td>
                            <button type="button" className="btn btn-warning">Edit</button> &nbsp;
                            <button type="button" className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default List;
