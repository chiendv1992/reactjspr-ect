import React, {Component} from 'react';

class TaskForm extends Component {

    onCloseForm = () =>{
        this.props.onCloseForm();
    }
    render() {
        return (
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className='panel-title'>
                        Add Task
                        <span className='glyphicon glyphicon-remove mg-l' onClick={this.onCloseForm}/>
                    </h3>
                </div>
                <div className="panel-body">
                    <form action="" method="POST">
                        <div className="form-group">
                            <label>Name :</label>
                            <input type="text" className="form-control" id="" placeholder="Input field"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Status :</label>
                            <select name="" id="input" className="form-control" required="required">
                                <option value="">Enable</option>
                                <option value="">Disable</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                        &nbsp;
                        <button type="submit" className="btn btn-danger">cancel</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
