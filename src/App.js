import MainPage from './layouts/MainPage';
import FirstQuest from './layouts/FirstQuest';
import FirstQuestJoker from './layouts/FirstQuestJoker';
import SecondQuest from './layouts/SeconQuest';
import SecondQuestJoker from './layouts/SeconQuestJoker';
import SecondQuestNoJoker from './layouts/SecondQuestNoJoker';
import ThirdQuest from './layouts/ThirdQuest';
import ThirdQuestJoker from './layouts/ThirdQuestJoker';
import ThirdQuestNoJoker from './layouts/ThirdQuestNoJoker';
import WinPage from './layouts/WinPage';
import LosePage from './layouts/LosePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/first' element={<FirstQuest />} />
          <Route path='/firstwithjoker' element={<FirstQuestJoker />} />
          <Route path='/second' element={<SecondQuest />} />
          <Route path='/secondwithjoker' element={<SecondQuestJoker />} />
          <Route path='/secondnojoker' element={<SecondQuestNoJoker />} />
          <Route path='/third' element={<ThirdQuest />} />
          <Route path='/thirdjoker' element={<ThirdQuestJoker />} />
          <Route path='/thirdnojoker' element={<ThirdQuestNoJoker />} />
          <Route path='/win' element={<WinPage />} />
          <Route path='/lose' element={<LosePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;