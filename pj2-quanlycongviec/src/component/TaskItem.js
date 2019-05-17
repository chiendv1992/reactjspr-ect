import React, {Component} from 'react';
class TaskItem extends Component {
    onUpdateStatus=()=>{
        this.props.onUpdateStatus(this.props.tasks.id)
    }

    // truyen id sang ch de delete
    onDelete =()=>{
        // console.log(this.props.tasks.id);
        this.props.onDelete(this.props.tasks.id);
    }

    render() {
        var {tasks, index} = this.props;
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{tasks.name}</td>
                <td >
                    <div
                        className={tasks.status === true
                            ? 'label label-success'
                            : 'label label-danger'}
                        onClick={this.onUpdateStatus}
                    >
                        {tasks.status === true ? 'Enable' : 'Disable'}
                    </div>
                </td>
                <td>
                    <button type="button" className="btn btn-warning">Edit</button>
                    &nbsp;
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onDelete}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
