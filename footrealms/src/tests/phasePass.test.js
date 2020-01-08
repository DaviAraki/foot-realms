import { pass } from "../App";
import selectCard from "../App";
import playCard from "../App";
import buyCard from "../App"
it ("when i pass phase, another should begin", ()=>{
    const G = {
        offer:{
            turn:0
        },
        phases:{
            inicio:{
                moves:{selectCard,pass},
                next:'disputa',
                start: true,
            },
            disputa:{
                next:'administracao'
                    
            },
            administracao:{
                moves:{playCard,pass,buyCard},
                next: 'classificacao',
    
            },
            classificacao:{
                onEnd: (G,ctx)=>{
                    for(i=0; i<G.players.length; i++){
                        while(G.players[i].hand.length<5){
                            draw(G,ctx);
                        };
                    };
                    G.offer.turn ++;
                },
                next:'inicio',
            }
        },
    };
    let ctx = {phase:"inicio", events:{}};
    let endPhase =jest.fn(()=>{
        ctx.phase="disputa";
    });
    ctx.events.endPhase = endPhase;
    pass(G,ctx);
    expect(ctx.phase).toBe("disputa");
})