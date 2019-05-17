import React, {Component} from 'react';

class TaskForm extends Component {

    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
            status: false
        };
    }

    onCloseForm = () =>{
        this.props.onCloseForm();
    }

    onChange =(event) =>{
        var target = event.target;
        var name = target.name;
        var value = target.value;
        if (name === 'status'){
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]:value
        });
    }

    // truyen data sang App
    onSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        // cennel and close form
        this.onClear();
        this.onCloseForm();

    }

    // xoa data trong form(
    onClear =() =>{
        this.setState({
            name : "",
            status:false
        });
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
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Name :</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Input Name"
                                name='name'
                                value={this.state.name}
                                onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="">Status :</label>
                            <select
                                name='status'
                                onChange={this.onChange}
                                className="form-control"
                                value={this.state.status}
                            >
                                <option value={true}>Enable</option>
                                <option value={false}>Disable</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary">Save</button>
                        &nbsp;
                        <button
                            type="submit"
                            className="btn btn-danger"
                            onClick={this.onClear}
                        >
                            cancel
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default TaskForm;
