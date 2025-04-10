
// Route to user login
const loginUser = async (req, res) => {
    res.json({ msg: "login API working" });
}

// Route to user registration
const registerUser = async (req, res) => {
    res.json({ msg: "register API working" });
}

// Route to admin login
const adminLogin = async (req, res) => {

}

export { loginUser, registerUser, adminLogin }