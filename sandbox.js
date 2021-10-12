
unitbox=document.querySelector('.unitbox')
racebar=document.querySelector('.racebar')
footer=document.querySelector('.footer');
mainframe=document.querySelector('.macroApp-wrapper')

let zerglist = [
    { name: 'drone', minerals: 50, gas: 0 , supply: 1, time:12},
    { name: 'queen', minerals: 150, gas: 0 , supply: 2, time:36},
    { name: 'overlord', minerals: 100, gas: 0 , supply: 0, time:18},

    { name: 'zergling', minerals: 50, gas: 0 , supply: 1, time:17},
    { name: 'roach', minerals: 75, gas: 25 , supply: 2, time:19},
    { name: 'hydralisk', minerals: 100, gas: 50 , supply: 2, time:24},
    { name: 'mutalisk', minerals: 100, gas: 100 , supply: 2, time:24},
    { name: 'corruptor', minerals: 150, gas: 100 , supply: 2, time:29},
    { name: 'infestor', minerals: 100, gas: 150 , supply: 2, time:36},
    { name: 'swarmhost', minerals: 100, gas: 75 , supply: 3, time:29},
    { name: 'viper', minerals: 100, gas: 200 , supply: 3, time:29},
    { name: 'ultralisk', minerals: 300, gas: 200 , supply: 6, time:39},
    { name: 'baneling', minerals: 25, gas: 25 , supply: 0, time:14},
    { name: 'ravager', minerals: 25, gas: 75 , supply: 1, time:9},
    { name: 'lurker', minerals: 50, gas: 100 , supply: 1, time:18},
    { name: 'broodlord', minerals: 150, gas: 150 , supply: 2, time:24},

    { name: 'overlord_speed', minerals: 100, gas: 100 , supply: 0, time:43},
    { name: 'burrow', minerals: 100, gas: 100 , supply: 0, time:71},

    { name: 'zergling_speed', minerals: 100, gas: 100 , supply: 0, time:79},
    { name: 'zergling_aggro', minerals: 200, gas: 200 , supply: 0, time:93},

    { name: 'roach_speed', minerals: 100, gas: 100 , supply: 0, time:79},
    { name: 'tunneling_claws', minerals: 100, gas: 100 , supply: 0, time:73},

    { name: 'hydra_range', minerals: 100, gas: 100 , supply: 0, time:71},
    { name: 'hydra_speed', minerals: 100, gas: 100 , supply: 0, time:71},

    { name: 'baneling_speed', minerals: 100, gas: 100 , supply: 0, time:71},

    { name: 'infestor_energy', minerals: 150, gas: 150 , supply: 0, time:57},
    { name: 'neural', minerals: 150, gas: 150 , supply: 0, time:79},

    { name: 'lurker_speed', minerals: 150, gas: 150 , supply: 0, time:57},
    { name: 'lurker_range', minerals: 150, gas: 150 , supply: 0, time:57},

    { name: 'nydus', minerals: 75, gas: 75 , supply: 0, time:14},

    { name: 'ultralisk_armor', minerals: 150, gas: 150 , supply: 0, time:79},
    { name: 'ultralisk_speed', minerals: 150, gas: 150 , supply: 0, time:43},

    { name: 'lair', minerals: 150, gas: 100 , supply: 0, time:57},
    { name: 'hive', minerals: 200, gas: 150 , supply: 0, time:71},
    { name: 'greater_spire', minerals: 100, gas: 150 , supply: 0, time:71},

    { name: 'z_ground_melee_1', minerals: 100, gas: 100 , supply: 0, time:114},
    { name: 'z_ground_melee_2', minerals: 150, gas: 150 , supply: 0, time:136},
    { name: 'z_ground_melee_3', minerals: 200, gas: 200 , supply: 0, time:157},

    { name: 'z_ground_range_1', minerals: 100, gas: 100 , supply: 0, time:114},
    { name: 'z_ground_range_2', minerals: 150, gas: 150 , supply: 0, time:136},
    { name: 'z_ground_range_3', minerals: 200, gas: 200 , supply: 0, time:157},

    { name: 'z_ground_armor_1', minerals: 150, gas: 150 , supply: 0, time:114},
    { name: 'z_ground_armor_2', minerals: 225, gas: 225 , supply: 0, time:136},
    { name: 'z_ground_armor_3', minerals: 300, gas: 300 , supply: 0, time:157},

    { name: 'z_air_attack_1', minerals: 100, gas: 100 , supply: 0, time:114},
    { name: 'z_air_attack_2', minerals: 175, gas: 175 , supply: 0, time:136},
    { name: 'z_air_attack_3', minerals: 250, gas: 250 , supply: 0, time:157},

    { name: 'z_air_armor_1', minerals: 150, gas: 150 , supply: 0, time:114},
    { name: 'z_air_armor_2', minerals: 225, gas: 225 , supply: 0, time:136},
    { name: 'z_air_armor_3', minerals: 300, gas: 300 , supply: 0, time:157},


];

let terranlist = [
    { name: 'scv', minerals: 50, gas: 0 , supply: 1, time:12},

    { name: 'marine', minerals: 50, gas: 0 , supply: 1, time:18},
    { name: 'reaper', minerals: 50, gas: 50 , supply: 1, time:32},
    { name: 'marauder', minerals: 100, gas: 25 , supply: 2, time:21},
    { name: 'ghost', minerals: 150, gas: 125 , supply: 2, time:29},

    { name: 'hellion', minerals: 100, gas: 0 , supply: 2, time:21},
    { name: 'widowmine', minerals: 75, gas: 25 , supply: 2, time:21},
    { name: 'cyclone', minerals: 150, gas: 100 , supply: 3, time:32},
    { name: 'tank', minerals: 150, gas: 125 , supply: 3, time:32},
    { name: 'thor', minerals: 300, gas: 200 , supply: 6, time:43},

    { name: 'viking', minerals: 150, gas: 75 , supply: 2, time:30},
    { name: 'medivac', minerals: 100, gas: 100 , supply: 2, time:30},
    { name: 'liberator', minerals: 150, gas: 150 , supply: 3, time:43},
    { name: 'raven', minerals: 100, gas: 200 , supply: 2, time:43},
    { name: 'banshee', minerals: 150, gas: 100 , supply: 3, time:43},
    { name: 'battlecruiser', minerals: 400, gas: 300 , supply: 6, time:64},

    { name: 'combat', minerals: 100, gas: 100 , supply: 0, time:79},
    { name: 'stim', minerals: 100, gas: 100 , supply: 0, time:100},
    { name: 'shell', minerals: 50, gas: 50 , supply: 0, time:43},

    { name: 'blueflame', minerals: 100, gas: 100 , supply: 0, time:79},
    { name: 'magnet', minerals: 100, gas: 100 , supply: 0, time:100},
    { name: 'claws', minerals: 75, gas: 75 , supply: 0, time:79},
    { name: 'servo', minerals: 100, gas: 100 , supply: 0, time:79},

    { name: 'raven_energy', minerals: 150, gas: 150 , supply: 0, time:79},
    { name: 'banshee_cloak', minerals: 100, gas: 100 , supply: 0, time:79},
    { name: 'banshee_speed', minerals: 150, gas: 150 , supply: 0, time:121},

    { name: 'ghost_cloak', minerals: 150, gas: 150 , supply: 0, time:86},
    { name: 'emp_range', minerals: 150, gas: 150 , supply: 0, time:79},
    { name: 'nuke', minerals: 100, gas: 100 , supply: 0, time:43},

    { name: 'yamato', minerals: 150, gas: 150 , supply: 0, time:100},
    { name: 'medivac_speed', minerals: 100, gas: 100 , supply: 0, time:57},
    { name: 'liberator_range', minerals: 150, gas: 150 , supply: 0, time:79},

    { name: 'building_range', minerals: 100, gas: 100 , supply: 0, time:57},
    { name: 'building_armor', minerals: 150, gas: 150 , supply: 0, time:100},

    { name: 'bio_attack_1', minerals: 100, gas: 100 , supply: 0, time:114},
    { name: 'bio_attack_2', minerals: 175, gas: 175 , supply: 0, time:136},
    { name: 'bio_attack_3', minerals: 250, gas: 250 , supply: 0, time:157},

    { name: 'bio_armor_1', minerals: 100, gas: 100 , supply: 0, time:114},
    { name: 'bio_armor_2', minerals: 175, gas: 175 , supply: 0, time:136},
    { name: 'bio_armor_3', minerals: 250, gas: 250 , supply: 0, time:157},

    { name: 'vehicle_attack_1', minerals: 100, gas: 100 , supply: 0, time:114},
    { name: 'vehicle_attack_2', minerals: 175, gas: 175 , supply: 0, time:136},
    { name: 'vehicle_attack_3', minerals: 250, gas: 250 , supply: 0, time:157},

    { name: 'vehicle_armor_1', minerals: 100, gas: 100 , supply: 0, time:114},
    { name: 'vehicle_armor_2', minerals: 175, gas: 175 , supply: 0, time:136},
    { name: 'vehicle_armor_3', minerals: 250, gas: 250 , supply: 0, time:157},

    { name: 'ship_attack_1', minerals: 100, gas: 100 , supply: 0, time:114},
    { name: 'ship_attack_2', minerals: 175, gas: 175 , supply: 0, time:136},
    { name: 'ship_attack_3', minerals: 250, gas: 250 , supply: 0, time:157},
    
    
];

let protosslist = [
    { name: 'probe', minerals: 50, gas: 0 , supply: 1, time:12},
    { name: 'mothership', minerals: 400, gas: 400 , supply: 8, time:114},

    { name: 'zealot', minerals: 100, gas: 0 , supply: 2, time:20},
    { name: 'sentry', minerals: 50, gas: 100 , supply: 2, time:23},
    { name: 'stalker', minerals: 125, gas: 50 , supply: 2, time:23},
    { name: 'adept', minerals: 100, gas: 25 , supply: 2, time:20},
    { name: 'high_templar', minerals: 50, gas: 150 , supply: 2, time:32},
    { name: 'dark_templar', minerals: 125, gas: 125 , supply: 2, time:32},

    { name: 'observer', minerals: 25, gas: 75 , supply: 1, time:21},
    { name: 'warpprism', minerals: 250, gas: 0 , supply: 2, time:36},
    { name: 'immortal', minerals: 275, gas: 100 , supply: 4, time:39},
    { name: 'coloss', minerals: 300, gas: 200 , supply: 6, time:54},
    { name: 'disruptor', minerals: 150, gas: 150 , supply: 3, time:36},

    { name: 'phoenix', minerals: 150, gas: 100 , supply: 2, time:25},
    { name: 'oracle', minerals: 150, gas: 150 , supply: 3, time:37},
    { name: 'voidray', minerals: 200, gas: 150 , supply: 4, time:37},
    { name: 'tempest', minerals: 250, gas: 175 , supply: 5, time:43},
    { name: 'carrier', minerals: 350, gas: 250 , supply: 6, time:64},

    { name: 'warpgate', minerals: 50, gas: 50 , supply: 0, time:100},

    { name: 'charge', minerals: 100, gas: 100 , supply: 0, time:100},
    { name: 'blink', minerals: 150, gas: 150 , supply: 0, time:121},
    { name: 'glaves', minerals: 100, gas: 100 , supply: 0, time:100},

    { name: 'observer_speed', minerals: 100, gas: 100 , supply: 0, time:57},
    { name: 'warpprism_speed', minerals: 100, gas: 100 , supply: 0, time:57},
    { name: 'coloss_range', minerals: 150, gas: 150 , supply: 0, time:100},

    { name: 'phoenix_range', minerals: 150, gas: 150 , supply: 0, time:64},
    { name: 'voidray_speed', minerals: 100, gas: 100 , supply: 0, time:57},
    { name: 'tempest_damage', minerals: 150, gas: 150 , supply: 0, time:100},

    { name: 'storm', minerals: 200, gas: 200 , supply: 0, time:79},
    { name: 'dt_blink', minerals: 100, gas: 100 , supply: 0, time:100},

    { name: 'p_ground_attack_1', minerals: 100, gas: 100 , supply: 0, time:129},
    { name: 'p_ground_attack_2', minerals: 150, gas: 150 , supply: 0, time:154},
    { name: 'p_ground_attack_3', minerals: 200, gas: 200 , supply: 0, time:179},

    { name: 'p_ground_armor_1', minerals: 100, gas: 100 , supply: 0, time:129},
    { name: 'p_ground_armor_2', minerals: 150, gas: 150 , supply: 0, time:154},
    { name: 'p_ground_armor_3', minerals: 200, gas: 200 , supply: 0, time:179},

    { name: 'p_ground_shield_1', minerals: 150, gas: 150 , supply: 0, time:129},
    { name: 'p_ground_shield_2', minerals: 225, gas: 225 , supply: 0, time:154},
    { name: 'p_ground_shield_3', minerals: 300, gas: 300 , supply: 0, time:179},

    { name: 'p_air_attack_1', minerals: 100, gas: 100 , supply: 0, time:129},
    { name: 'p_air_attack_2', minerals: 175, gas: 175 , supply: 0, time:154},
    { name: 'p_air_attack_3', minerals: 250, gas: 250 , supply: 0, time:179},

    { name: 'p_air_armor_1', minerals: 150, gas: 150 , supply: 0, time:129},
    { name: 'p_air_armor_2', minerals: 225, gas: 225 , supply: 0, time:154},
    { name: 'p_air_armor_3', minerals: 300, gas: 300 , supply: 0, time:179},

];


let selectedUnits = [];

let minworker=16;
let minmules=0;
let gasworker=6;
let currentrace=-1;

let min_income=0;
let gas_income=0;

let min_costs=0;
let gas_costs=0;

let overmins;
let overgas;

let iconwidth=65;



function displayZergUnits()
{
    mainframe.style.backgroundImage="url('zerg_console.png')";
    currentrace=0;
    zerglist.forEach(unit => {
        uniticon = document.createElement('div');
        uniticon.innerHTML=`<img src="icons/${unit.name}.png" width=${iconwidth} >  <div class="tooltiptext"> 
        <div>Minerals: <img src="icons/minerals.png">  ${unit.minerals}  </div>
        <div>Gas: <img src="icons/gas.png">  ${unit.gas} </div>
        <div>Supply: <img src="icons/supply.png">  ${unit.supply} </div>
        <div>Time: <img src="icons/time.png">  ${unit.time} </div>
        <div class="costs"> 
        <div> Unit-Costs/Min: <img src="icons/minerals.png"> ${(unit.minerals*60/unit.time).toFixed(2)} </div>
        <div> Supply-Costs/Min: <img src="icons/minerals.png"> ${(750/unit.time*unit.supply).toFixed(2)} </div>
        <div> Unit-Costs/Min: <img src="icons/gas.png"> ${(unit.gas*60/unit.time).toFixed(2)} </div>
        </div>

         </div>`;
        uniticon.setAttribute('class','uniticon_new tooltip');
        unitbox.append(uniticon);
    });
}

function displayTerranUnits()
{
    mainframe.style.backgroundImage="url('terran_console.png')";
    currentrace=1;
    terranlist.forEach(unit => {
        uniticon = document.createElement('div');
        uniticon.innerHTML=`<img src="icons/${unit.name}.png" width=${iconwidth} >  <div class="tooltiptext"> 
        <div>Minerals: <img src="icons/minerals.png">  ${unit.minerals}  </div>
        <div>Gas: <img src="icons/gas.png">  ${unit.gas} </div>
        <div>Supply: <img src="icons/supply.png">  ${unit.supply} </div>
        <div>Time: <img src="icons/time.png">  ${unit.time} </div>
        <div class="costs"> 
        <div> Unit-Costs/Min: <img src="icons/minerals.png"> ${(unit.minerals*60/unit.time).toFixed(2)} </div>
        <div> Supply-Costs/Min: <img src="icons/minerals.png"> ${(750/unit.time*unit.supply).toFixed(2)} </div>
        <div> Unit-Costs/Min: <img src="icons/gas.png"> ${(unit.gas*60/unit.time).toFixed(2)} </div>
        </div>

         </div>`;
        uniticon.setAttribute('class','uniticon_new');
        unitbox.append(uniticon);
    });
}

function displayProtossUnits()
{
    mainframe.style.backgroundImage="url('protoss_console.png')";
    currentrace=2;
    protosslist.forEach(unit => {
        uniticon = document.createElement('div');
        uniticon.innerHTML=`<img src="icons/${unit.name}.png" width=${iconwidth} >  <div class="tooltiptext"> 
        <div>Minerals: <img src="icons/minerals.png">  ${unit.minerals}  </div>
        <div>Gas: <img src="icons/gas.png">  ${unit.gas} </div>
        <div>Supply: <img src="icons/supply.png">  ${unit.supply} </div>
        <div>Time: <img src="icons/time.png">  ${unit.time} </div>
        <div class="costs"> 
        <div> Unit-Costs/Min: <img src="icons/minerals.png"> ${(unit.minerals*60/unit.time).toFixed(2)} </div>
        <div> Supply-Costs/Min: <img src="icons/minerals.png"> ${(750/unit.time*unit.supply).toFixed(2)} </div>
        <div> Unit-Costs/Min: <img src="icons/gas.png"> ${(unit.gas*60/unit.time).toFixed(2)} </div>
        </div>

         </div>`;
        uniticon.setAttribute('class','uniticon_new');
        unitbox.append(uniticon);
    });
}

function removeUnitsfromUnitBox()
{
    unitbox.innerHTML='';
}

function selectRace(e)
{
    removeUnitsfromUnitBox();
    if (e.target.innerHTML.includes('Zerg'))
    {
        displayZergUnits();

    }
    else if(e.target.innerHTML.includes('Terran'))
    {
        displayTerranUnits();
    }
    else
    {
        displayProtossUnits();
    }
}



function decreaseMineralWorker()
{
    if(minworker>0)
    {
        minworker--;
    }
    
    document.getElementById('minworker').innerText=`Worker: ${minworker}`;

}

function increaseMineralWorker()
{
    minworker++;
    document.getElementById('minworker').innerText=`Worker: ${minworker}`;

}

function decreaseMules()
{
    if(minmules>0)
    {
        minmules--;
    }
    
    document.getElementById('minmules').innerText=`Mules: ${minmules}`;

}

function increaseMules()
{
    minmules++;
    document.getElementById('minmules').innerText=`Mules: ${minmules}`;

}

function decreaseGasWorker()
{
    if(gasworker>0)
    {
        gasworker--;
    }
    
    document.getElementById('gasworker').innerText=`Worker: ${gasworker}`;

}

function increaseGasWorker()
{
    gasworker++;
    document.getElementById('gasworker').innerText=`Worker: ${gasworker}`;

}

function addUnitToFooter(e)
{
    
    if(e.target.getAttribute('class')==null)
    {
        
        clickedUnitText = e.target.getAttribute('src').split('/')[1].split('.')[0]
        if (currentrace==0)
        {
            // Zerg
            clickedUnit=zerglist.find(obj => obj.name === clickedUnitText);
            
        }
        else if (currentrace==1)
        {
            // Terran
            clickedUnit=terranlist.find(obj => obj.name === clickedUnitText);
        }
        else
        {
            // Protoss
            clickedUnit=protosslist.find(obj => obj.name === clickedUnitText);
        }
        selectedUnits.push(clickedUnit)
        displaySelectedUnits();
    }
    refreshIncome();
    
}

function displaySelectedUnits()
{
    footer.innerHTML='';
    selectedUnits.forEach(unit => {
        uniticon = document.createElement('div');
        uniticon.innerHTML=`<img src="icons/${unit.name}.png" width=${iconwidth} > <div class="tooltiptext">Remove</div>`
        uniticon.setAttribute('class','uniticon_new ')
        footer.append(uniticon);
    });
}

function removeFromFooter(e)
{
    if(e.target.getAttribute('class')==null)
    {
        clickedUnitText = e.target.getAttribute('src').split('/')[1].split('.')[0]
        clickedUnit=selectedUnits.find(obj => obj.name === clickedUnitText);
        indexOfUnit = selectedUnits.indexOf(selectedUnits.find(obj => obj.name === clickedUnit.name));
        selectedUnits.splice(indexOfUnit,1);
        displaySelectedUnits();
    }
    refreshIncome();
    
}

function refreshIncome()
{
    a=document.querySelector('.min_income_bar');
    min_income=57*minworker+235*minmules;
    gas_income=54.2*gasworker;
    overmins=min_income-min_costs;
    overgas=gas_income-gas_costs;
    supply_constant=100/8; // 100 minerals per 8 supply
    document.getElementById('mincounter').innerText=`Overmins/Min: ${overmins.toFixed(2)}`;
    document.getElementById('gascounter').innerText=`Overgas/Min: ${overgas.toFixed(2)}`;
    

    // Loop through selected units and calculate costs
    min_costs=0;
    gas_costs=0;
    selectedUnits.forEach(unit =>{
        // Calculate costs for each unit
        min_costs+=60/unit.time*(unit.minerals + supply_constant*unit.supply);
        gas_costs+=60/unit.time*(unit.gas);
    });

    document.getElementById('mincostcounter').innerText=`Min-Costs/Min: ${min_costs.toFixed(2)}`;
    document.getElementById('gascostcounter').innerText=`Gas-Costs/Min: ${gas_costs.toFixed(2)}`;

    maxval=Math.max(min_income,gas_income);
    if(min_costs/min_income*350<=500)
    {
        document.querySelector('.min_cost_bar').style.height=min_costs/min_income*350;
    }
    else if(min_costs==0)
    {
        document.querySelector('.min_cost_bar').style.height=0;
    }
    else
    {
        document.querySelector('.min_cost_bar').style.height=500;
    }
    if(gas_costs/gas_income*350<=500)
    {
        document.querySelector('.gas_cost_bar').style.height=gas_costs/gas_income*350;
    }
    else if(gas_costs==0)
    {
        document.querySelector('.gas_cost_bar').style.height=0;
    }
    else
    {
        document.querySelector('.gas_cost_bar').style.height=500;
    }
    


}


// Event listeners
displayZergUnits();
mainframe.addEventListener('click',refreshIncome)
racebar.addEventListener('click',selectRace)
unitbox.addEventListener('click',addUnitToFooter)
footer.addEventListener('click',removeFromFooter)
