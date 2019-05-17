import React, {Component} from 'react';
import Controll from './component/Controll';
import TaskForm from './component/TaskForm';
import List from './component/List';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            isDisplayForm: true
        };
    }

    // dc goi thi gan vao state, goi duy nhat 1 lan
    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')) {
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                'tasks': tasks
            });
        }
    }


    // onGenerateData = () => {
    //     var tasks = [
    //         {
    //             id: 1,
    //             name: 'hoc',
    //             status: false
    //         },
    //         {
    //             id: 2,
    //             name: 'hoc1',
    //             status: false
    //         },
    //         {
    //             id: 3,
    //             name: 'hoc2',
    //             status: false
    //         },
    //         {
    //             id: 4,
    //             name: 'hoc3',
    //             status: true
    //         }
    //     ];
    //     this.setState({
    //         tasks: tasks
    //     });
    //     //luu tru vao storage kieu string (Json.stringify)
    //     localStorage.setItem('tasks', JSON.stringify(tasks));
    // }

    // dóng mở  form
    onToggleForm = () => {
        this.setState({
            isDisplayForm: !this.state.isDisplayForm
        });
    }

    // nut close form
    onCloseForm = () => {
        this.setState(({
            isDisplayForm: false
        }));
    }

    makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    // lay data tu TaskForm
    onSubmit = (data) =>{
        // console.log(this.makeid(10));
        var {tasks} = this.state; //this.state.tasks
        data.id = this.makeid(10);
        tasks.push(data);
        this.setState({
            tasks : tasks
        });
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // update
    onUpdateStatus = (id)=>{
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if (index !== -1){
            tasks[index].status = !tasks[index].status;
            this.setState({
                tasks : tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }

    findIndex(id){
        var {tasks } = this.state;
        var result = -1;
        tasks.forEach((tasks, index) => {
            if (tasks.id === id)
            {
                result = index;
            }
        });
        return result;
    }

    // delete dc lay id tu thang con
    onDelete = (id) =>{
        var {tasks} = this.state;
        var index = this.findIndex(id);
        if (index !== -1){
            // xoa phan tu co index va so luong phan tu co the dung unshift
            tasks.splice(index, 1);
            // tasks.unshift();
            this.setState({
                tasks : tasks
            });
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
        this.onCloseForm();
    }

    render() {
        var {tasks, isDisplayForm} = this.state;
        var elmTasksForm = isDisplayForm === true
            ? <TaskForm
                onCloseForm = {this.onCloseForm}
                onSubmit = {this.onSubmit}
            />
            : '';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Manager Task</h1>
                </div>
                <div className="row">
                    <div className={isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''}>
                        {elmTasksForm}
                    </div>
                    <div
                        className={isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>

                        {/*button Add*/}
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={this.onToggleForm}
                            >
                                {isDisplayForm === true ? 'Close Form Task' : 'Add Task'} &nbsp;&nbsp;
                                <span
                                    className={isDisplayForm === true
                                        ? 'glyphicon glyphicon-minus'
                                        : 'glyphicon glyphicon-plus mg-l'}
                                />
                            </button>
                            &nbsp;
                            {/*<button*/}
                            {/*    type="button"*/}
                            {/*    className="btn btn-danger"*/}
                            {/*    onClick={() => this.onGenerateData()}*/}
                            {/*>*/}
                            {/*    Generate Task &nbsp;&nbsp;*/}
                            {/*</button>*/}
                        </div>
                        <Controll/>
                        {/* table*/}
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <List
                                tasks={tasks}
                                onUpdateStatus={this.onUpdateStatus}
                                onDelete={this.onDelete}
                            />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
