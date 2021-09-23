import React from 'react';
import Form from '../common/form.component';
import Input from '../common/input.component';
class Login extends Form {
    state = {
        data: { userName: '', password: '' },
        errors: { userName: '', password: '' }
    }

    doSubmit = (e) => {
    
        const userName = e.target[0].value;
        const password = e.target[1].value;

        if(userName === 'admin' && password === '12345') {
            this.props.history.push('/movies');
        }
        else {          
            const errors = {...this.state.errors};
            errors.userName = 'Username may be incorrect.';
            errors.password = 'Password may be incorrect.'; 
            this.setState({...this.state, errors });         
        }
     
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const userName = e.target[0].value;
        const password = e.target[1].value;
        const errors = {...this.state.errors};   

        if (userName === 'admin' && password === '12345') {
            this.props.history.push('/movies');
        }
        else {
            errors.userName = 'User Name may be incorrect';
            errors.password = 'Password may be incorrect';

        }
        this.setState({ ...this.state, errors });
    }
    
    // validateInput = (name, value) => {
    //     if (name === 'userName') {
    //         if (value.trim() === '') return 'User Name must not be empty';

    //     }
    //     if (name === 'password') {
    //         if (value.trim() === '') return 'Password must not be empty';

    //     }
    //     return '';
    // }

    // handleChange = e => {
    //     const name = e.currentTarget.name;
    //     const value = e.target.value;

    //     const error = this.validateInput(name, value);
    //     const errors = { ...this.state.errors };

    //     errors[name] = error;

    //     const user = { ...this.state.user };
    //     user[name] = value;
    //     this.setState({ user, errors });
    // }

    render() {
        return (
            <div className="container w-50 mx-auto">
                <form onSubmit={this.handleSubmit}>
                    <div className="mb-3">
                    <Input
                            label="User Name"
                            type="text"
                            name="userName"
                            id="username"
                            value={this.state.data.userName}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />                    
                    </div>
                    <div className="mb-3">
                    <Input
                            label="Password"
                            type="text"
                            name="password"
                            id="password"
                            value={this.state.data.password}
                            onChange={e => this.handleChange(e)}
                            errors={this.state.errors}
                        />
                       
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="remember" />
                        <label className="form-check-label" htmlFor="remember">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        )
    }

};
export default Login;