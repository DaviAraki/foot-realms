import { Client } from "boardgame.io/react";
import {FootRealms} from './Game';
import "./App.css";
import GameBoard from "./components/GameBoard";
import { SocketIO } from 'boardgame.io/multiplayer';


const App = Client({
   game: FootRealms, 
   board: GameBoard, 
   numPlayers : 1,
   multiplayer: SocketIO({ server: 'localhost:8000' }),
  });

export default App;
