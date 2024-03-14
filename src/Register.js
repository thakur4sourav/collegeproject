function Register()
{
    return(
        <div>
            <h1>Register Page</h1>
            <form>
                <div class="contact">
                    <label for="Name">Enter the Name: </label>
                    <input type="text" Name="Name" placeholder="Enter the Name"required></input>
                </div>
                <div class="contact">
                <label for="Email">Enter the Email:</label>
                <input type="email" Name="Email" placeholder="Enter the Email"required></input>
                </div>
                <div class="contact">
                    <label for="Password">Enter the Password: </label>
                    <input type="password" Name="Password" placeholder="Enter the Password"required></input>
                </div>
                <div class="contact">
                    <label for="ConfirmPassword">Enter the ConfirmPassword: </label>
                    <input type="password" Name="Password" placeholder="Enter the confirmPassword"required></input>
                </div>
                <button type="button" Name="Register">Register</button>
            </form>
        </div>
    )
}

export default Register;