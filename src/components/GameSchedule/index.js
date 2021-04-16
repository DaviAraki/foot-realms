import React from "react";
import "./styles.css";

export default class GameSchedule extends React.Component {

    render() {
        let roundSchedule

        switch (this.props.turn) {
            case 0:
                roundSchedule =
                    <div>
                        <h1>Round: {this.props.turn + 1} </h1>
                        {this.props.player.name} Vs Bot 1 <br></br>
                         Bot 2 vs Bot 3<br></br>
                        Bot 4 vs Bot 5<br></br>
                        Bot 6 vs Bot 7<br></br>
                    </div>
                break
            case 1:
                roundSchedule =
                    <div>
                        <h1>Round: {this.props.turn + 1} </h1>
                        {this.props.player.name} Vs Bot 2 <br></br>
                             Bot 3 vs Bot 4<br></br>
                            Bot 5 vs Bot 6<br></br>
                            Bot 7 vs Bot 1<br></br>
                    </div>
                break
            case 2:
                roundSchedule =
                    <div>
                        <h1>Round: {this.props.turn + 1} </h1>
                        {this.props.player.name} Vs Bot 3 <br></br>
                                Bot 1 vs Bot 4<br></br>
                                Bot 5 vs Bot 7<br></br>
                                Bot 6 vs Bot 2<br></br>
                    </div>
                break
            case 3:
                roundSchedule =
                    <div>
                        <h1>Round: {this.props.turn + 1} </h1>
                        {this.props.player.name} Vs Bot 4 <br></br>
                                    Bot 1 vs Bot 4<br></br>
                                    Bot 5 vs Bot 7<br></br>
                                    Bot 6 vs Bot 2<br></br>
                    </div>
                break
            case 4:
                roundSchedule =
                    <div>
                        <h1>Round: {this.props.turn + 1} </h1>
                        {this.props.player.name} Vs Bot 5 <br></br>
                                        Bot 1 vs Bot 4<br></br>
                                        Bot 5 vs Bot 7<br></br>
                                        Bot 6 vs Bot 2<br></br>
                    </div>
                break
            case 5:
                roundSchedule =
                    <div>
                        <h1>Round: {this.props.turn + 1} </h1>
                        {this.props.player.name} Vs Bot 6 <br></br>
                                            Bot 1 vs Bot 4<br></br>
                                            Bot 5 vs Bot 7<br></br>
                                            Bot 6 vs Bot 2<br></br>
                    </div>
                break
            case 6:
                roundSchedule =
                    <div>
                        <h1>Round: {this.props.turn + 1} </h1>
                        {this.props.player.name} Vs Bot 7 <br></br>
                                                Bot 1 vs Bot 4<br></br>
                                                Bot 5 vs Bot 7<br></br>
                                                Bot 6 vs Bot 2<br></br>
                    </div>
                break

            case 7:
                roundSchedule =
                    <div>
                        <h1>Championship Finished</h1>
                    </div>
                break
            default:
                break
        }



        return (
            <div className="schedule">

                <div>{roundSchedule}</div>
            </div>
        )
    }
}