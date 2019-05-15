import React, {Component} from 'react';
class TaskItem extends Component {
    render() {
        var {tasks, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{tasks.name}</td>
                <td >
                    <div className={tasks.status === true ? 'label label-success' : 'label label-danger'}>
                        {tasks.status === true ? 'Enable' : 'Disable'}
                    </div>
                </td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    &nbsp;
                    <button type="button" className="btn btn-danger">Delete</button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
