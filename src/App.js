import './App.css';

import HomePage from "./Components/Pages/HomePage/HomePage";
import UserCard from "./Components/UI/UserCard/UserCard";
import RecentPlayedList from "./Components/UI/RecentPlayedList/RecentPlayedList";
import SongFullScreen from "./Components/UI/SongFullScreen/SongFullScreen";

function App() {
    return (
        <div className="App">
            <SongFullScreen />
        </div>
    );
}

export default App;
