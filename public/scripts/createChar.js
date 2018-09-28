var CCLASS = require('../middleware/classes/cclass');

module.export= {
    makeChar: function(character) {
        let newChar = JSON.parse(JSON.stringify(character));
        
       let health_points = Math.floor(Math.random()*100);
       let magic_points= Math.floor(Math.random()*100);
       let strength=  Math.floor(Math.random()*100);
       let speed=Math.floor(Math.random()*100);
       let stamina= Math.floor(Math.random()*100);
       let intellegence=Math.floor(Math.random()*100);
       let attack_power=Math.floor(Math.random()*100);
       let defense_power=Math.floor(Math.random()*100);
       let attack_rate=Math.floor(Math.random()*100);
        
        switch (character.cclass) {
            case "Bard": 
                health_points = health_points * CCLASS.bard.health_points;
        }
        newChar.health_points = health_points;
        newChar.magic_points = magic_points;
        newChar.strength = strength;
        newChar.speed = speed;
        newChar.stamina = stamina;
        newChar.intellegence = intellegence;
        newChar.attack_power = attack_power; 
        newChar.defense_power = defense_power;
        newChar.attack_rate = attack_rate;
     return newChar;
    }
};