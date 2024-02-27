import React from 'react';
import './App.scss';
import { Window } from './components/Window';



export const App: React.FC = () => {
  return (
    <div className="App">
      {[1, 2, 3].map(window => (
        <Window num={window} key={window} />
      ))}
    </div>
  );
};