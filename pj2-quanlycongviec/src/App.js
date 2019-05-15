import React, {Component} from 'react';
import Controll from './component/Controll';
import TaskForm from './component/TaskForm';
import List from './component/List';
import './App.css';
class App extends Component {
    render() {
        return (
            <div className="container">
                <div className="text-center">
                    <h1>Manager Task</h1>
                </div>
                <div className="row">
                    <TaskForm />
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <form action="">
                            {/*button Add*/}
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <button
                                    type="button"
                                    className="btn btn-primary"
                                >
                                    Add Task &nbsp;&nbsp;
                                    <span className={'glyphicon glyphicon-plus mg-l'}/>
                                </button>
                            </div>
                            <Controll/>
                            {/* table*/}
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                <List/>
                            </div>
                            
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}

export default App;
