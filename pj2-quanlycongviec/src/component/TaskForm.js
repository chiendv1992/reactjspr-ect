import React, {Component} from 'react';
class TaskForm extends Component {
    render() {
        return (
           <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                {/*form*/}
                <div className="panel panel-warning">
                    <div className="panel-heading">
                        <h3 className='panel-title'>
                            Add Task
                            <span className='glyphicon glyphicon-remove mg-l'/>
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
            </div>
        );
    }
}

export default TaskForm;
