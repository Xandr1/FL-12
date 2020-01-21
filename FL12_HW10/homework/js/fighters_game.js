class Fighter {
    constructor(proper) {
        proper.los = 0;
        proper.win = 0;
        proper.hlt = proper.hp;
        return {
            getName() {
                return proper.name;
            },
            getDamage() {
                return proper.damage;
            },
            getStrength() {
                return proper.strength;
            },
            getAgility() {
                return proper.agility;
            },
            getHealth() {
                return proper.hlt;
            },
            dealDamage(hltPoints) {
                proper.hlt = proper.hlt - hltPoints >= 0 ? proper.hlt - hltPoints : 0;
            },
            heal(hltPoints) {
                proper.hlt = proper.hlt + hltPoints <= proper.hp ? proper.hlt + hltPoints : proper.hp;
            },
            addWin() {
                proper.win++;
            },
            addLoss() {
                proper.los++;
            },
            attack(defender) {
                let rand = Math.floor(Math.random() * 100);
                let success = 100 - (defender.getStrength() + defender.getAgility());
                if (rand <= success) {
                    defender.dealDamage(this.getDamage());
                    console.log(`${this.getName()} makes ${this.getDamage()} damage to ${defender.getName()}`);
                } else {
                    console.log(`${defender.getName()} attack missed`);
                }
            },
            logCombatHistory() {
                console.log(`Name: ${this.getName()}, Wins: ${proper.wins}, Lossses: ${proper.los}`);
            }
        }
    }
}

let fight = (...fighters) => {
    let dead = [...fighters].find((item) => item.getHealth() <= 0);

    if (dead) {
        console.log(`${dead.getName()} is dead`);
    } else {
        fighters[0].attack(fighters[1]);
        if (fighters[1].getHealth()) {
            fighters[1].attack(fighters[0]);
            if (fighters[0].getHealth()) {
                fight(...fighters);
            } else {
                console.log(`${fighters[1].getName()} has won!`);
                fighters[1].addWin();
                fighters[0].addLoss();
            }
        } else {
            console.log(`${fighters[0].getName()} has won!`);
            fighters[0].addWin();
            fighters[1].addLoss();
        }
    }
}


const fighter1 = new Fighter({ name: 'Maximus', damage: 20, strength: 20, agility: 15, hp: 100 });
const fighter2 = new Fighter({ name: 'Comodus', damage: 25, strength: 25, agility: 20, hp: 90 });
