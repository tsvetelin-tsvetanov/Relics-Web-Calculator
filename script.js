var health = 0;
var physicalDefence = 0;
var physicalAttack = 0;
var elementalDefence = 0;
var elementalAttack = 0;
var speed = 0;
var selectedElements = 0;

document.calculator.healing.value = health;
document.calculator.physicalDefence.value = physicalDefence;
document.calculator.physicalAttack.value = physicalAttack;
document.calculator.elementalDefence.value = elementalDefence;
document.calculator.elementalAttack.value = elementalAttack;
document.calculator.speed.value = speed;

function changeStats(){
    var relic = arguments[0];
    var divObj = arguments[1];	
	
    if(!relicList[relic]){			
		if(selectedElements > 3){
			alert("You can select up to 4 relics at a time");
			return;			
		}
		selectedElements += 1;	
		relicList[relic] = true;
        divObj.style.color = 'gold';
    } else {
        relicList[relic] = false;
        divObj.style.color = 'black';
		selectedElements -= 1;
    }
	
    for(var i = 2; i < arguments.length; i+=2){
        var stat = arguments[i];
        var value = arguments[i+1];

        switch (stat){
            case 'Health':
                changeHealth(value, relic);
                break;
            case 'PhysicalDefence':
                changePhysicalDefence(value, relic);
                break;
            case 'PhysicalAttack':
                changePhycicalAttack(value, relic);
                break;
            case 'ElementalDefence':
                changeElementalDefence(value, relic);
                break;
            case 'ElementalAttack':
                changeElementalAttack(value, relic);
                break;
            case 'Speed':
                changeSpeed(value, relic);
                break;
        }
    }
}

function changeHealth(value, relic){
    if(relicList[relic]) {
        health += value;
    } else {
        health -= value;
    }
}

function changePhysicalDefence(value, relic){
    if(relicList[relic]){
        physicalDefence += value;
    } else {
        physicalDefence -= value;
    }
}

function changePhycicalAttack(value, relic){
    if(relicList[relic]){
        physicalAttack += value;
    } else {
        physicalAttack -= value;
    }
}

function changeElementalDefence(value, relic){
    if(relicList[relic]){
        elementalDefence += value;
    } else {
        elementalDefence -= value;
    }
}

function changeElementalAttack(value, relic){
    if(relicList[relic]){
        elementalAttack += value;
    } else {
        elementalAttack -= value;
    }
}

function changeSpeed(value, relic){
    if(relicList[relic]){
        speed += value;
    } else {
        speed -= value;
    }
}

function printStats(){
	document.calculator.healing.value = health;
	document.calculator.physicalAttack.value = physicalAttack;
	document.calculator.physicalDefence.value = physicalDefence;
	document.calculator.elementalAttack.value = elementalAttack;
	document.calculator.elementalDefence.value = elementalDefence;
	document.calculator.speed.value = speed;	
}

var relicList = {};
relicList["lakeAzorePearl"] = false; // HP +5
relicList["wishingWellCoin"] = false; // PD +2
relicList["fenholmRiverRock"] = false; // EA +2
relicList["woodsmansAxeHead"] = false; // PA +3
relicList["spineretteSilk"] = false; // Speed +5
relicList["collectorsGem"] = false; // ED +2
relicList["elefaunaFlower"] = false; // ED +5
relicList["bottlefog"] = false; // PD +5
relicList["azoreCattailRoot"] = false; // Speed +10
relicList["magiciteRing"] = false; // EA +4
relicList["volcanicReef"] = false; // PD +5
relicList["prapple"] = false; // HP +10
relicList["magicFlowerSeed"] = false; // HP +15
relicList["elderTreeBark"] = false; // ED +10
relicList["silverRuinShard"] = false; // Speed +15
relicList["magiciteRobe"] = false; // EA +6
//Growliath Mace - PA +6
//Azteko Skin - PD +10
//PoL Fragment - Seed +20
//Eternal Falls Mushroom - HP +10
//Magicite Amulet - EA +10
//Skyline Peak Gem - ED +15
//CoM Treasure - PD +15
//Eternal Ice - PA +10
//Apollo Nox Parchment EA +15
//Dragon Shackle - PD +22
//Scholar's Scroll - XP +10%
//Leggy Eggs - ED +22
//Frozen Root - ED -11 , PD -11
//Quartex Crystal - EA -11 , PA -11
//Stony Shield - PD +25 , Speed -7
//Bloomanne's Claw - PA +15
//Cloud Cake - HP +25
//Emerald Scales - EA +14 , ED +14 , PA -4 , PD -4
//Obsidian Lava - PA +14 , PD +14 , EA -4, ED -4
//Cactus Flower - HP +22 , ED +3 , PD +3 , PA -3 , EA -3
//Molten Coin - ED +17 , PD +17 , EA + 11 , + 11 PA
//Peepsie Eggs - HP +25, EA +10, Speed -10 , PA -5
//Dark Owlie Feather - EA +17, Speed +10, ED -9, PD -9
//Ashy Feather - Speed +20, EA +15, HP -10, ED -5
//Temple Stone - EA +17, Speed +20, HP -20
//Scent of Skustunk - Speed -20, EA +15, PA +15
//Monastery Idol - Speed +25
//Moss of Drowsie - HP +3, ED +1, PD +1, Speed -2
//Patchkin's Ring - Speed -15, EA +15, PA +10
//Deep Sea Coral - HP +15, Speed +15
//Aerobian Keffiyeh - EA +13, Speed +13, HP -5
//Magicite Staff - EA +10, Speed +15, ED +5, PD -6
//Helzbelz Bell - PA +20, EA -14, Speed -5
//Arrow of Love - HP +20, PA +8
//Dark Warro Thorn's - Speed -10, EA -5, HP +20, PA +10
//Everlasting Snowball - ED +25, Speed -7
//Spooky Horn -  Speed +20, EA +20, ED -10, PD -10
//Vanquished Soul - PA +8, HP +20
//Dragon's Fang - PA +13, Speed +9, HP -9
//Cage of Despair - ED +20, PD +15, Speed -20
//Lost Swords - PA +20, Speed +10, HP -10
//Forest Guard's Rope - ED +25, EA +5, PA -5, PD -5
//Nox's Nightmare - EA +15, PA +15. HP +15, Speed -10, ED -10, PD -10
//Charachol Idol - Speed -5, EA +20, ED +5, PD +5, PA -14
//Ship Captain's Log - HP -15, ED +18, PD +18
//Mystic Map - EA +20, Speed +10, HP -10
//Monk's Robe - HP +25, EA +20, ED-5, PD -5, PA -10
//Airship Keys - ED -11, PD -11
//Volcano Guard - HP +12, ED +12, PD +12, PA -5, PD -5
//Monk's Mt. Guard - HP +25, PA +20, ED -5, PD -5, EA -10
//Mt. Gemma Guard - Speed +15, PD +15, ED +10, HP -10, PA -10
//Jungle Guard - EA +7, Speed +7, ED +7, PD +7, PA -15
//Sunfall Shore's Guard - PA +7, PD +7, ED +7, HP +7, Speed +7, EA -15
//Forging Hammer - EA -11, PA -11
//Frozen Coin - EA +17, PA +17, ED +11, PD +11
//Bean Stalk - Speed +25, ED +10, PD +10, HP -10
//Echino Shell - EA +18, PD +18, PA -5, ED -5
//Nero's Orb - PA +20, Speed +10, PD +10, HP -10, EA -5, ED -5
//Geotoad Teeth - PA +20, HP +10, EA -14, ED +5, PD +5., Speed -5
//Moon Rock - HP +30, ED +10, PD +10, Speed -15, EA -15, PA -15
//Flintly's Horn - EA +10, HP +10, PD +17, PA -15
//Nanaslug's Horn - EA +20, HP +20, Speed -10, ED -5, PD -5
//Flying Carpet Fragment - EA +15, PD +10, HP +5, Speed -25, PA -15, ED +10
//Petrified Mama Baby - PA +10, EA +10, HP +20, Speed -15
//Truncherous Hammer - HP +5, PA +15, Speed +5, EA -10
//Shrunken Tiki Heads - PA +30
//Flaring's Halo - ED +18, PA +18, EA -5, PD -5
//Skelepup Spark - EA +30
//Saiyam's Triden - HP +30
//Tiki Idol - Speed +30
//Dark Wind's Venom - ED +30
//Gravitron Pebble - Speed +15, HP +15, PA +20, EA -15
//Apollo Nox Prophecy Scroll - PD +30
//Hotdog Chew Toy - EA -10, PA -10, ED +15, PD +15, HP +15, Speed -15
//Petrified Dragon Egg - HP -12, Speed +15, EA +15, PA +15, PD -10, ED -10
//Aerobian Comp - EA +10, PA +10, Speed +25, HP -15
//Gold Piece Die - PD +20, PA +5, ED -5, EA -5
//Smoke Ring - Speed +25, PA +20
//Casanova's Harp - EA +20, Speed +25
//Cactus Thorn -
//Tiki Shrinking Potion - EA +20, PA -15, HP +15, Speed +15
//Essence of Foil Orb - HP +25, Speed +20
//Cactolin's Thorn - HP +30, ED -5, Speed -25, EA +10, PA +10, PD -5
//Ryuu Statue - PD +15, ED +15
//Djinn Essence - EA +25, PA +25, HP +25
//Fractured Shell - ED +35
//Pamlda's Talon - PA +35
//Dawnstone - EA +35
//Shattered Gatestone - PD +35
//Bubble of Dawn - Speed +35
//Shard of Dawn's Landing - HP +35
//Flame of Flue - EA +15, Speed -5, HP +15
//Shard of Rudolffe - EA +15, PA -5, Speed -5, PD +25
//Papa's Antlers - EA +20, PA +15, HP +20
//Shackler's Gem - Sleep Immunity
//Embers of Winqull - Confuse Immunity
//Gog's Cog - EA -15, PA +15, PD +10, ED +10, +5 HP, Speed -25
//Glob of Eclipso - HP +15, Speed -5, PA +15
//Lyeogryph's Eye - Speed -15, EA +20, HP +5
//Dorux's Candle - Speed +20, EA +15, HP +5, PA -30, ED +15
//Hand of Graw - Poison Immunity, HP -10
//Golden Teeth - Speed +35, EA +15, PA -30
//Pyrant's Flame - Confuse Immunity, Sleep Immunity, HP -25
//Blighted Eye - Poison Immunity
//Molly's Orb - Speed -20, HP +40
//Helyon's Tail - EA +20, PA +20, HP +10
//Rare Coin - PD +17, EA +17, PA +17, ED +17
//Goldy's Spike - Speed +5, PD +15, EA -30, HP +20, PA +15
//Painful Elemental Shield - HP -6, EA +5
//Passive Shield - PD +4 ED +4
//Magician's Shield - EA +11
//Vital Shield - HP +32
//Healing Protector's Shield - HP +10, PD +7, ED +8
//Sniping Shield - Speed +20, EA +8, PA +7
//Element's Shield of Legends - EA +29
//Paladin's Shield - PA +34
//Shield of Watchfulness - Sleep Immunity, Speed -11
//Rapid Recovering Shield - HP +43, Speed +43
//Shield of Directness - PA +24, PD +24
//Shield of Elemental Rage - EA +33, Speed +40
//Shield of Passive Aggression - HP +52, PA -15, EA -15 , PD +30, + ED +30
//Shield of Dark Immunity - HP -18, PA +10, EA +10, Poison Immunity
//Shield of All Powers - HP +22, EA +11, ED +11, PA +11, PD +11, Speed +22
//

