import { Client } from "boardgame.io/react";
import {FootRealms} from './Game';
import "./App.css";
import GameBoard from "./components/GameBoard";


const App = Client({
   game: FootRealms, 
   board: GameBoard, 
   numPlayers : 1,
  });

export default App;
