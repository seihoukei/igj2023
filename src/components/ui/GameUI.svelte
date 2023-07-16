<script>
    import UIMeta from "./UIMeta.svelte"
    import game from "stores/store-game.js"
    import UIDialogs from "utility/dialog/UIDialogs.svelte"
    import UIToolTip from "utility/tooltip/UIToolTip.svelte"
    import UIField from "./UIField.svelte"
    import Dialogs from "utility/dialog/dialogs.js"

    $: state = $game?.state ?? null
</script>

{#if import.meta.env.MODE === "development" && (!state || state?.settings?.debugInfo)}
    <pre class="debug">{JSON.stringify($game, null, 1).replace(/(\d+\.\d{1,2})\d+/g,"$1")}</pre>
{/if}

{#if state}
    <div class="layout">
        <UIField />

        <button class="top right"
                on:click={() => Dialogs.open("menu")}
        >
            Menu
        </button>
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

        font-size: calc(100vmin / 32);

        overflow: hidden;

        display: flex;
    }

    button {
        font-size: 1em;
        position: absolute;
        width: 8em;
        height: 4em;
    }

    button.top {
        top : 0
    }

    button.bottom {
        bottom: 0;
    }

    button.left {
        left : 0
    }

    button.right {
        right : 0
    }
</style>
