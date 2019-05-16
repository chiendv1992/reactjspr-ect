import React, {Component} from 'react';
import Controll from './component/Controll';
import TaskForm from './component/TaskForm';
import List from './component/List';
import './App.css';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            tasks:[],
            isDisplayForm:false
        };
    }
    // dc goi thi gan vao state, goi duy nhat 1 lan
    componentWillMount() {
        if (localStorage && localStorage.getItem('tasks')){
            var tasks = JSON.parse(localStorage.getItem('tasks'));
            this.setState({
                'tasks' : tasks
            });
        }
    }


    onGenerateData = () => {
        var tasks = [
            {
                id: 1 ,
                name: 'hoc',
                status: false
            },
            {
                id: 2 ,
                name: 'hoc1',
                status: false
            },
            {
                id: 3 ,
                name: 'hoc2',
                status: false
            },
            {
                id: 4 ,
                name: 'hoc3',
                status: true
            }
        ];
        this.setState({
            tasks:tasks
        });
        //luu tru vao storage kieu string (Json.stringify)
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // dóng mở  form
    onToggleForm = () =>{
        this.setState(({
            isDisplayForm:!this.state.isDisplayForm
        }));
    }

    onCloseForm = () => {
        this.setState(({
            isDisplayForm:false
        }));
    }
    render() {
        var {tasks, isDisplayForm} = this.state;
        var elmTasksForm = isDisplayForm === true?<TaskForm onCloseForm={this.onCloseForm}/>:'';
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Manager Task</h1>
                </div>
                <div className="row">
                    <div className={isDisplayForm === true ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4':''}>
                        {elmTasksForm}
                    </div>
                    <div className={isDisplayForm === true ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8':'col-xs-12 col-sm-12 col-md-12 col-lg-12'}>
                        <form action="">
                            {/*button Add*/}
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                    onClick={this.onToggleForm}
                                >
                                    {isDisplayForm === true?'Close Form Task':'Add Task'} &nbsp;&nbsp;
                                    <span className={isDisplayForm === true?'glyphicon glyphicon-minus':'glyphicon glyphicon-plus mg-l'}/>
                                </button>
                                &nbsp;
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={()=>this.onGenerateData()}
                                >
                                    Generate Task &nbsp;&nbsp;
                                </button>
                            </div>
                            <Controll/>
                            {/* table*/}
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <List tasks={tasks}/>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
