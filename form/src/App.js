import React, {Component} from 'react';
import './App.css';

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            txtname : 'aa',
            txtpassword : '',
            txtdesc : 'ádasd',
            sltGender : 1,
            rdlang : 'vi',
            chkbStatus : false
        };
        this.onHandleChange = this.onHandleChange.bind(this);
        this.onSubmitform = this.onSubmitform.bind(this);
    }

    //Lay data tu form nhiều thuộc tính tru checkbox
    onHandleChange(event){
        //name và value lay từ target
        var target = event.target;
        // lấy name của form(txtuser, txtpassword)
        var name = target.name;
        // lấy giá trị của form của các thuoc tính, checkbox thì lấy data bằng taget.checked
        // var value = target.value;
        var value = target.type === 'checkbox' ? target.checked:target.value;

        // gọi state
        this.setState({
            [name] : value
        })
    }

    onSubmitform(event){
        // khi submit form k load lại trang
        event.preventDefault();
        console.log(this.state);
    }

    render(){
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                <h3 className="panel-title">Form</h3>
                            </div>
                            <div className="panel-body">
                                <form onSubmit={this.onSubmitform} >
                                    {/*value thường đi theo onChange*/}
                                    <div className="form-group">
                                        <label >User name</label>
                                        <input type="text"
                                               className="form-control"
                                               placeholder="User"
                                               name='txtname'
                                               onChange={ this.onHandleChange }
                                               value={this.state.txtname}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label >Password</label>
                                        <input type="password"
                                               className="form-control"
                                               placeholder="Password"
                                               name='txtpassword'
                                               onChange={ this.onHandleChange }
                                               value={this.state.txtpassword}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <textarea className="form-control"
                                                  rows='5'
                                                  name='txtdesc'
                                                  onChange={ this.onHandleChange }
                                                  value={this.state.txtdesc}
                                        />
                                    </div>

                                    {/*the <option> k can thuoc tinh selected vi
                                    the select co thuoc tinh value goi den state nên xác định giá trị của option
                                    */}
                                    <div className="form-group">
                                        <label>Gene</label>
                                        <select name="sltGender"
                                                id="input"
                                                className="form-control"
                                                required="required"
                                                value={this.state.sltGender}
                                                onChange={ this.onHandleChange }
                                        >
                                            <option value={0}>nu</option>
                                            <option value={1}>nam</option>
                                        </select>
                                    </div>
                                    {/*thuoc tinh checked xdinh xem giá trị ban đâu để select */}
                                    <div className="form-group">
                                        <label>Ngôn Ngữ</label>
                                        <br/>
                                        <label>
                                            <input
                                                type="radio"
                                                name="rdlang"
                                                value='en'
                                                onChange={ this.onHandleChange }
                                                checked={this.state.rdlang === 'vi'}
                                            />
                                            Anh
                                        </label>
                                        <br/>
                                        <label>
                                            <input
                                                type="radio"
                                                name="rdlang"
                                                value='vi'
                                                onChange={ this.onHandleChange }
                                                checked={this.state.rdlang === 'vi'}
                                            />
                                                Viet
                                        </label>
                                    </div>
                                    {/*truong hop dac biet*/}
                                    <div className="checkbox">
                                        <label>
                                            <input
                                                type="checkbox"
                                                value={true}
                                                name={'chkbStatus'}
                                                onChange={this.onHandleChange}
                                                checked={this.state.chkbStatus === true}
                                            />
                                            Status
                                        </label>
                                    </div>
                                    

                                    <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
                                    <button type="submit" className="btn btn-default">Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default App;
