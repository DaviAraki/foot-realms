import { Client } from "boardgame.io/react";
import {FootRealms} from './Game';
import "./App.css";
import React from 'react';
import GameBoard from "./components/GameBoard";
import { SocketIO } from 'boardgame.io/multiplayer';


const FootReamlsClient = Client({
   game: FootRealms, 
   board: GameBoard, 
   multiplayer: SocketIO({ server: 'localhost:8000' }),
  });

const App = () =>(
  <div>
    <FootReamlsClient playerID="0" />
</div>
) 

export default App;
