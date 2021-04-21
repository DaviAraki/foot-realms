import React from "react";
import { giveOffer } from "../../actions/gameActions";
import "./styles.css";

export default class GameSchedule extends React.Component {

    render() {

        return (
            <div className="schedule">
                <div>
                    <h1>Round: 1 </h1>
                    {this.props.player.name} 0 x 0 {this.props.bots[0].name} {this.props.bots[0].strength}<br></br>
                    {this.props.bots[1].strength} {this.props.bots[1].name} 0 x 0 {this.props.bots[2].name}  {this.props.bots[2].strength}<br></br>
                    {this.props.bots[3].strength} {this.props.bots[3].name} 0 x 0 {this.props.bots[4].name}  {this.props.bots[4].strength}<br></br>
                    {this.props.bots[5].strength} {this.props.bots[5].name} 0 x 0 {this.props.bots[6].name}  {this.props.bots[6].strength}<br></br>
                </div>
                <div>
                    <h1>Round: 2 </h1>
                    {this.props.player.name} 0 x 0 {this.props.bots[1].name} {this.props.bots[1].strength}<br></br>
                    {this.props.bots[2].strength} {this.props.bots[2].name} 0 x 0 {this.props.bots[0].name} {this.props.bots[0].strength}<br></br>
                    {this.props.bots[3].strength} {this.props.bots[3].name} 0 x 0 {this.props.bots[6].name} {this.props.bots[6].strength}<br></br>
                    {this.props.bots[4].strength} {this.props.bots[4].name} 0 x 0 {this.props.bots[5].name} {this.props.bots[5].strength}<br></br>
                </div>
                <div>
                    <h1>Round: 3 </h1>
                    {this.props.player.name} 0 x 0 {this.props.bots[2].name} {this.props.bots[2].strength}<br></br>
                    {this.props.bots[4].strength} {this.props.bots[4].name} 0 x 0 {this.props.bots[0].name} {this.props.bots[0].strength}<br></br>
                    {this.props.bots[5].strength} {this.props.bots[5].name} 0 x 0 {this.props.bots[6].name} {this.props.bots[6].strength}<br></br>
                    {this.props.bots[3].strength} {this.props.bots[3].name} 0 x 0 {this.props.bots[1].name} {this.props.bots[1].strength}<br></br>
                </div>
                <div>
                    <h1>Round: 4 </h1>
                    {this.props.player.name} 0 x 0 {this.props.bots[3].name} {this.props.bots[3].strength}<br></br>
                    {this.props.bots[5].strength} {this.props.bots[5].name} 0 x 0 {this.props.bots[1].name} {this.props.bots[1].strength}<br></br>
                    {this.props.bots[6].strength} {this.props.bots[6].name} 0 x 0 {this.props.bots[0].name} {this.props.bots[0].strength}<br></br>
                    {this.props.bots[2].strength} {this.props.bots[4].name} 0 x 0 {this.props.bots[2].name} {this.props.bots[2].strength}<br></br>
                </div>
                <div>
                    <h1>Round: 5 </h1>
                    {this.props.player.name} 0 x 0 {this.props.bots[4].name} {this.props.bots[4].strength}<br></br>
                    {this.props.bots[5].strength} {this.props.bots[5].name} 0 x 0 {this.props.bots[3].name} {this.props.bots[3].strength}<br></br>
                    {this.props.bots[6].strength} {this.props.bots[6].name} 0 x 0 {this.props.bots[2].name} {this.props.bots[2].strength}<br></br>
                    {this.props.bots[0].strength} {this.props.bots[0].name} 0 x 0 {this.props.bots[1].name} {this.props.bots[1].strength}<br></br>
                </div>
                <div>
                    <h1>Round: 6 </h1>
                    {this.props.player.name} 0 x 0 {this.props.bots[5].name} {this.props.bots[5].strength}<br></br>
                    {this.props.bots[1].strength} {this.props.bots[1].name} 0 x 0 {this.props.bots[2].name} {this.props.bots[2].strength}<br></br>
                    {this.props.bots[6].strength} {this.props.bots[6].name} 0 x 0 {this.props.bots[4].name} {this.props.bots[4].strength}<br></br>
                    {this.props.bots[0].strength} {this.props.bots[0].name} 0 x 0 {this.props.bots[3].name} {this.props.bots[3].strength}<br></br>
                </div>
                <div>
                    <h1>Round: 7 </h1>
                    {this.props.player.name} 0 x 0 {this.props.bots[6].name} {this.props.bots[6].strength}<br></br>
                    {this.props.bots[2].strength} {this.props.bots[2].name} 0 x 0 {this.props.bots[3].name} {this.props.bots[3].strength}<br></br>
                    {this.props.bots[0].strength} {this.props.bots[0].name} 0 x 0 {this.props.bots[5].name} {this.props.bots[5].strength}<br></br>
                    {this.props.bots[1].strength} {this.props.bots[1].name} 0 x 0 {this.props.bots[4].name} {this.props.bots[4].strength}<br></br>
                </div>

            </div>
        )
    }
}