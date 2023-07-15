const CORES = {
    red: {
        name : "Redium",
        angle : -2/3 * Math.PI,
        baseProperties : {
            tapCharge : 1,
            autoCharge : 0.5,
            hitCharge : 0.5,
            chargeLossSpeed : 0.35,
            emitSize : 1,
            emitChargeLoss : 0.4,
        },
    },
    green: {
        name : "Greon",
        angle : 0,
        baseProperties: {
            tapCharge : 0.3,
            autoCharge : 0.1,
            hitCharge : 1.5,
            chargeLossSpeed : 0.5,
            emitSize : 0.2,
            emitChargeLoss: 0.7,
        }
    },
    blue : {
        name : "Bluite",
        angle : 2/3 * Math.PI,
        baseProperties: {
            tapCharge : 0.1,
            autoCharge : 0.2,
            hitCharge : 0.3,
            chargeLossSpeed : 0.2,
            emitSize : 5,
            emitChargeLoss : 1,
        }
    }
}

export default CORES
