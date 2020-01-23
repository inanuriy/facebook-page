import React from 'react'

export default function Login() {
    return (
        <div>   
            <form>
            <div class="container">
                <div class="form-row">
                    <div class="col-5">
                    
                    <input type="text" class="form-control" placeholder="E-mail"></input>
                    </div>
                    <div class="col-5">
                    <input type="text" class="form-control" placeholder="Password"></input>
                    </div>
                    <div class="col-2">
                    <button>Login</button>
                    </div>
                </div>
            </div>
            </form>
        </div>
    )
}
