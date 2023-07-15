<script>
    import UIMeta from "./UIMeta.svelte"
    import game from "stores/store-game.js"
    import UIDialogs from "utility/dialog/UIDialogs.svelte"
    import UIToolTip from "utility/tooltip/UIToolTip.svelte"
    import UIField from "./UIField.svelte"

    $: state = $game?.state ?? null
</script>

{#if import.meta.env.MODE === "development" && (!state || state?.settings?.debugInfo)}
    <pre class="debug">{JSON.stringify($game, null, 1).replace(/(\d+\.\d{1,2})\d+/g,"$1")}</pre>
{/if}

{#if state}

    <div class="layout">
        <div class="pad start"></div>
        <UIField />
        <div class="pad end"></div>
    </div>

    <UIDialogs />
    <UIToolTip />
{/if}

<style>
    pre.debug {
        position: absolute;
        left : 0;
        top : 20px;
        color: white;
        opacity: 0.3;
        pointer-events: none;
        font-size: 8px;
        z-index : 1000;
    }

    div.layout {
        position: absolute;
        left: 0;
        top : 0;
        right : 0;
        bottom : 0;

        overflow: hidden;

        display: flex;
    }

    div.pad {
        flex-grow: 999;
    }

    div.pad.start {
        background: linear-gradient(to left, var(--ui-border), var(--ui-background),  var(--ui-background));
    }

    div.pad.end {
        background: linear-gradient(to right, var(--ui-border), var(--ui-background),  var(--ui-background));
    }

    @media (max-aspect-ratio : 1/1) {
        div.layout {
            flex-direction: column;
        }

        div.pad.start {
            background: linear-gradient(to top, var(--ui-border), var(--ui-background),  var(--ui-background));
        }

        div.pad.end {
            background: linear-gradient(to bottom, var(--ui-border), var(--ui-background),  var(--ui-background));
        }
    }
</style>
