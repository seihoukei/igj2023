const GAME_CONFIG = {
    title : "RGB Generator", //important!
    
    state: {
        defaultState : Object.freeze({
        }),

        savePrefix: "Generator", //important!
        saveVersion: 1,
    
        // autosave on important actions
        actionsaveActive: true,
        // important events to autosave game shortly after
        actionsaveEvents: [],
        // important events to create a backup before
        autobackupEvents: [],
        
        autosaveInterval: 10000,    //settings.autosaveInterval
        // minimum time between saves (with actionsaves)
        minimumInterval: 2000,
    },
    
    timer: {
        maxTickTime: 3600,
        maxStepTime: 60,
        rate : 30,      //settings.dataFPS
        boost : 1,
        svelteTickEveryStep : false,
    },
    
    tooltip: {
        delay : 500,    //settings.tooltipDelay
    },
    
    displayString: {
        numberPostfixes : "DEFAULT",
        numberUseCeil : false,
        numberLength : 10,
        numberDigits : 3,
        numberEStep : 1,
        numberEPlus : false,
        numberEThreshold : 9,
        numberEFractionThreshold : -2,
        numberZeroThreshold : 1e-9,
        numberCutTrailingZeroes : false,
        numberDynamicDigits : true,
    },
    
    settings: {
        globalPrefix: "Seihoukei_Game",
        
        customCategories: {
        },
        customSettings: {
        },
    },
}

export default GAME_CONFIG
