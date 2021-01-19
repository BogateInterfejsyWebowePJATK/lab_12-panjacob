import './App.css';
import usersData from "./data/users.json";

import LoginForm from "./components/LoginForm";

function App() {
    return (

                    <LoginForm usersData={usersData} />

    );
}

export default App;
