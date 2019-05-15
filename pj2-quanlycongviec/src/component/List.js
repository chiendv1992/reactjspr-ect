import React, {Component} from 'react';
import TaskItem from './TaskItem';
class List extends Component {
    render() {
        var {tasks} = this.props;
        var elementtasks = tasks.map((tasks, index)=>{
            return <TaskItem key={tasks.id} index ={index} tasks={tasks}/>;
        });
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
                    {elementtasks}
                </tbody>
            </table>
        );
    }
}

export default List;
