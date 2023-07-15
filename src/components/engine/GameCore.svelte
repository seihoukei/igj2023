<script>
    import Portal from "svelte-portal"
    import CORES from "../../data/data-cores.js"
    import Trigger from "@seihoukei/trigger-svelte"

    export let id
    export let core = {
        value : 10,
        charge : 0,
    }

    Trigger.on("command-advance", advance)

    const data = CORES[id]

    const distance = 8
    const size = 12
    const x = 16 + distance * Math.cos(data.angle)
    const y = 16 + distance * Math.sin(data.angle)

    $: cssProperties = `
        --core-x: ${x}em;
        --core-y: ${y}em;
        --core-size: ${size}em;
        --core-charge: ${core.charge * 100}%;
    `

    function advance(time) {
        core.charge -= time * data.baseProperties.chargeLossSpeed
        if (core.charge < 0)
            core.charge = 0
    }

    function tapCharge() {
        core.charge += data.baseProperties.tapCharge
        emitCheck()
    }

    function emitCheck() {
        while (core.charge >= 1) {
            core.charge -= data.baseProperties.emitChargeLoss
        }
    }
</script>

<Portal target="#cores">
    <div class="core {id}"
         style={cssProperties}
         on:click={tapCharge}
    >
        {core.value}
    </div>
</Portal>

<style>
    div.core {
        position: absolute;
        left: var(--core-x);
        top: var(--core-y);
        width: var(--core-size);
        height: var(--core-size);
        transform: translate(-50%, -50%);

        border-radius: 50%;

        background: radial-gradient(circle farthest-side,
            #FFFFFF33, #FFFFFF33 100%, #FFFFFF00
        ), radial-gradient(
            var(--core-normal),
            var(--core-normal),
            var(--core-dark)
        );
        background-size: var(--core-charge) var(--core-charge), 100% 100%;
        background-repeat: no-repeat;
        background-position: center, center;

        display : flex;
        align-items: center;
        justify-content: center;

        cursor: pointer;
    }
</style>
