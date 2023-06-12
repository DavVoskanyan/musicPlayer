import './App.css';

import HomePage from "./Components/Pages/HomePage/HomePage";
import UserCard from "./Components/UI/UserCard/UserCard";
import RecentPlayedList from "./Components/UI/RecentPlayedList/RecentPlayedList";

function App() {
    return (
        <div className="App">
            <UserCard/>
            <RecentPlayedList />
        </div>
    );
}

export default App;
