<script>

import Dialogs from "../../utility/dialog/dialogs.js"
</script>

<div class="field">
    <div id="cores">

    </div>

    <button class="top right"
            on:click={() => Dialogs.open("menu")}
    >
        Menu
    </button>

</div>

<style>
    div.field {
        position: relative;

        width : 100vmin;
        height : 100vmin;

        font-size: calc(100vmin / 32);

        background: url("./resources/images/generator_bg.jpg");
        background-size: cover;
        overflow: hidden;
    }

    div#cores {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
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
