import React, { Component } from 'react';
import './LancerDe.css';
import De from './De';


class LanceDe extends Component {
    static defaultProps = {
        max: 10,
        faces: ["0", "1", "2", "3", "4", "5"]

    };


    constructor(props) {

        super(props);
        this.state = {
            dice1: '4',
            dice2: "2",
            act: false,
            victory: 0,
            lose: 0, scr: 0,
            max: 0,
            maximaum: false
        }
        this.lancer = this.lancer.bind(this);
        this.reset = this.reset.bind(this);

    }



    lancer() {

        if (this.state.max < 10) {
            this.score();
            const thedice1 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
            const thedice2 = this.props.faces[Math.floor(Math.random() * this.props.faces.length)];
            this.setState({ dice1: thedice1, dice2: thedice2, act: true });
            setTimeout(() => { this.setState({ act: false }); }, 600);
            this.state.max = this.state.max + 1;
        }

        if (this.state.max > 10) {
            this.state.maximaum = true;
            this.state.good = 0;
            this.state.bad = 0;
        }

    };

    score() {
        if (this.state.dice1 === this.state.dice2) {
            this.state.victory = this.state.victory + 1;
            this.state.scr = this.state.scr + 1
        }
        if (this.state.dice1 !== this.state.dice2) {
            this.state.lose = this.state.lose + 1;
            this.state.scr = this.state.scr - 1
        }
    }
    reset() {
        this.setState({
            scr: 0,
            lose: 0,
            victory: 0,
            max: 0
        });
    }

    render() {
        let s = ""
        if (this.state.max > 0) {
            s = this.state.dice1 === this.state.dice2 ? "  YOU WIN  " : " TRY AGAIN !  "

        }
        return (
            <div className='LanceDe'>

                <p>  <br /></p>

                <container>
                    <De face={this.state.dice1} act={this.state.act} />
                    <De face={this.state.dice2} act={this.state.act} />
                </container>
                <p > <h1> <em> {s} </em></h1>     </p>

                <button onClick={this.lancer} > Run dices </button>
                <button onClick={this.reset} > Reset Game  </button>

                <p> <h1>your score is : {this.state.scr}</h1>  </p>
                <p> <strong>number of tries : {this.state.max}</strong> </p>
                <p   > <strong id='w' >number of wins : {this.state.victory}</strong> </p>
                <p> <strong id='l'> number of loses : {this.state.lose}</strong> </p>

                <p> <br /> </p>


            </div>
        )

    }

}

export default LanceDe;