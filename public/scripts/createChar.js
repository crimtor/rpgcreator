var CCLASS = require('../../middleware/classes/cclass.js');
var RACE = require('../../middleware/classes/races.js');

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
       
       var randomNumForName = Math.floor(Math.random()*10);
       switch (character.race) {
           case 'Human':
               if(character.sex == 'Male'){
                   newChar.name = RACE.human.maleNames[randomNumForName];
               }else{
                   newChar.name = RACE.human.femaleNames[randomNumForName];
               }
             
               break;
            case 'Centaur':
                if(character.sex == 'Male'){
                   newChar.name = RACE.centaur.maleNames[randomNumForName];
               }else{
                   newChar.name = RACE.centaur.femaleNames[randomNumForName];
               }
               break;
            case 'Dwarf':
                if(character.sex == 'Male'){
                   newChar.name = RACE.dwarf.maleNames[randomNumForName];
               }else{
                   newChar.name = RACE.dwarf.femaleNames[randomNumForName];
               }
               break;
            case 'Elf':
                if(character.sex == 'Male'){
                   newChar.name = RACE.elf.maleNames[randomNumForName];
               }else{
                   newChar.name = RACE.elf.femaleNames[randomNumForName];
               }
               break;
            case 'Orc':
                if(character.sex == 'Male'){
                   newChar.name = RACE.orc.maleNames[randomNumForName];
               }else{
                   newChar.name = RACE.orc.femaleNames[randomNumForName];
               }
               break;
           default:
               // code
       }
        
        switch (character.cclass) {
            case 'Bard': 
                health_points = health_points * CCLASS.bard.health_points;
                magic_points= magic_points * CCLASS.bard.magic_points;
                strength=  strength * CCLASS.bard.strength;
                speed= speed * CCLASS.bard.speed;
                stamina= stamina * CCLASS.bard.stamina;
                intellegence= intellegence * CCLASS.bard.intellegence;
                attack_power=  attack_power * CCLASS.bard.attack_power;
                defense_power= defense_power * CCLASS.bard.defense_power;
                attack_rate= attack_rate * CCLASS.bard.attack_rate;
                
                break;
            
            case 'Druid': 
                health_points = health_points * CCLASS.druid.health_points;
                magic_points= magic_points * CCLASS.druid.magic_points;
                strength=  strength * CCLASS.druid.strength;
                speed= speed * CCLASS.druid.speed;
                stamina= stamina * CCLASS.druid.stamina;
                intellegence= intellegence * CCLASS.druid.intellegence;
                attack_power=  attack_power * CCLASS.druid.attack_power;
                defense_power= defense_power * CCLASS.druid.defense_power;
                attack_rate= attack_rate * CCLASS.druid.attack_rate;
                
                break;
                
            case 'Hunter': 
                health_points = health_points * CCLASS.hunter.health_points;
                magic_points= magic_points * CCLASS.hunter.magic_points;
                strength=  strength * CCLASS.hunter.strength;
                speed= speed * CCLASS.hunter.speed;
                stamina= stamina * CCLASS.hunter.stamina;
                intellegence= intellegence * CCLASS.hunter.intellegence;
                attack_power=  attack_power * CCLASS.hunter.attack_power;
                defense_power= defense_power * CCLASS.hunter.defense_power;
                attack_rate= attack_rate * CCLASS.hunter.attack_rate;
                
                break;
                
            case 'Paladin': 
                health_points = health_points * CCLASS.paladin.health_points;
                magic_points= magic_points * CCLASS.paladin.magic_points;
                strength=  strength * CCLASS.paladin.strength;
                speed= speed * CCLASS.paladin.speed;
                stamina= stamina * CCLASS.paladin.stamina;
                intellegence= intellegence * CCLASS.paladin.intellegence;
                attack_power=  attack_power * CCLASS.paladin.attack_power;
                defense_power= defense_power * CCLASS.paladin.defense_power;
                attack_rate= attack_rate * CCLASS.paladin.attack_rate;
                
                break;
                
            case 'Rogue': 
                health_points = health_points * CCLASS.rogue.health_points;
                magic_points= magic_points * CCLASS.rogue.magic_points;
                strength=  strength * CCLASS.rogue.strength;
                speed= speed * CCLASS.rogue.speed;
                stamina= stamina * CCLASS.rogue.stamina;
                intellegence= intellegence * CCLASS.rogue.intellegence;
                attack_power=  attack_power * CCLASS.rogue.attack_power;
                defense_power= defense_power * CCLASS.rogue.defense_power;
                attack_rate= attack_rate * CCLASS.rogue.attack_rate;
                
                break;
                
            case 'Warrior': 
                health_points = health_points * CCLASS.warrior.health_points;
                magic_points= magic_points * CCLASS.warrior.magic_points;
                strength=  strength * CCLASS.warrior.strength;
                speed= speed * CCLASS.warrior.speed;
                stamina= stamina * CCLASS.warrior.stamina;
                intellegence= intellegence * CCLASS.warrior.intellegence;
                attack_power=  attack_power * CCLASS.warrior.attack_power;
                defense_power= defense_power * CCLASS.warrior.defense_power;
                attack_rate= attack_rate * CCLASS.warrior.attack_rate;
                
                break;
                
            case 'Wizzard': 
                health_points = health_points * CCLASS.wizard.health_points;
                magic_points= magic_points * CCLASS.wizard.magic_points;
                strength=  strength * CCLASS.wizard.strength;
                speed= speed * CCLASS.wizard.speed;
                stamina= stamina * CCLASS.wizard.stamina;
                intellegence= intellegence * CCLASS.wizard.intellegence;
                attack_power=  attack_power * CCLASS.wizard.attack_power;
                defense_power= defense_power * CCLASS.wizard.defense_power;
                attack_rate= attack_rate * CCLASS.wizard.attack_rate;
                
                break;
                
            default:
            
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