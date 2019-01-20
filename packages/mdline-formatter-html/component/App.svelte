<section class="cd-timeline js-cd-timeline">
    <div class="cd-timeline__container">
        {#each items as item}
        <div class="cd-timeline__block js-cd-block">
            <div class="cd-timeline__img cd-timeline__img--movie js-cd-img">
            </div>
            <div class="cd-timeline__content js-cd-content">
                <h2>{item.title}</h2>
                {@html item.bodyHTML}
                {#if item.endDate }
                    <span class="cd-timeline__date">{item.beginDate} - {item.endDate}</span>
                {:else}
                    <span class="cd-timeline__date">{item.beginDate}</span>
                {/if}
            </div>
        </div>
        {/each}
    </div>
</section>
<style>
    /* Based on https://github.com/CodyHouse/vertical-timeline */
    .cd-timeline *, .cd-timeline *::after, .cd-timeline *::before {
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .cd-timeline {
        font-size: 1.6rem;
        font-family: "Droid Serif", serif;
        color: #7f8c97;
        background-color: #e9f0f5;
    }


    .cd-timeline :global(a) {
        color: #acb7c0;
        text-decoration: none;
    }

    .cd-timeline :global(img) {
        max-width: 100%;
    }

    .cd-timeline :global(h1), :global(h2) {
        font-family: "Open Sans", sans-serif;
        font-weight: bold;
    }

    .cd-timeline {
        overflow: hidden;
        margin: 2em auto;
    }

    .cd-timeline__container {
        position: relative;
        width: 90%;
        max-width: 1170px;
        margin: 0 auto;
        padding: 2em 0;
    }

    .cd-timeline__container::before {
        /* this is the vertical line */
        content: '';
        position: absolute;
        top: 0;
        left: 18px;
        height: 100%;
        width: 4px;
        background: #d7e4ed;
    }

    @media only screen and (min-width: 1170px) {
        .cd-timeline {
            margin-top: 3em;
            margin-bottom: 3em;
        }

        .cd-timeline__container::before {
            left: 50%;
            margin-left: -2px;
        }
    }

    .cd-timeline__block {
        position: relative;
        margin: 2em 0;
    }

    .cd-timeline__block:after {
        /* clearfix */
        content: "";
        display: table;
        clear: both;
    }

    .cd-timeline__block:first-child {
        margin-top: 0;
    }

    .cd-timeline__block:last-child {
        margin-bottom: 0;
    }

    @media only screen and (min-width: 1170px) {
        .cd-timeline__block {
            margin: 4em 0;
        }
    }

    .cd-timeline__img {
        position: absolute;
        top: 0;
        left: 0;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        -webkit-box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
        box-shadow: 0 0 0 4px white, inset 0 2px 0 rgba(0, 0, 0, 0.08), 0 3px 0 4px rgba(0, 0, 0, 0.05);
    }

    .cd-timeline__img {
        background: #75ce66;
    }

    @media only screen and (min-width: 1170px) {
        .cd-timeline__img {
            width: 60px;
            height: 60px;
            left: 50%;
            margin-left: -30px;
            /* Force Hardware Acceleration */
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
        }
    }

    @-webkit-keyframes cd-bounce-1 {
        0% {
            opacity: 0;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }
        60% {
            opacity: 1;
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    @keyframes cd-bounce-1 {
        0% {
            opacity: 0;
            -webkit-transform: scale(0.5);
            transform: scale(0.5);
        }
        60% {
            opacity: 1;
            -webkit-transform: scale(1.2);
            transform: scale(1.2);
        }
        100% {
            -webkit-transform: scale(1);
            transform: scale(1);
        }
    }

    .cd-timeline__content {
        position: relative;
        margin-left: 60px;
        background: white;
        border-radius: 0.25em;
        padding: 1em;
        -webkit-box-shadow: 0 3px 0 #d7e4ed;
        box-shadow: 0 3px 0 #d7e4ed;
    }

    .cd-timeline__content:after {
        /* clearfix */
        content: "";
        display: table;
        clear: both;
    }

    .cd-timeline__content::before {
        /* triangle next to content block */
        content: '';
        position: absolute;
        top: 16px;
        right: 100%;
        height: 0;
        width: 0;
        border: 7px solid transparent;
        border-right: 7px solid white;
    }

    .cd-timeline__content h2 {
        color: #303e49;
    }

    .cd-timeline__content :global(p),
    .cd-timeline__date {
        font-size: 1.3rem;
    }

    .cd-timeline__content :global(p) {
        margin: 1em 0;
        line-height: 1.6;
    }

    .cd-timeline__date {
        display: inline-block;
    }

    .cd-timeline__date {
        float: left;
        padding: .8em 0;
        opacity: .7;
    }

    @media only screen and (min-width: 768px) {
        .cd-timeline__content h2 {
            font-size: 2rem;
        }

        .cd-timeline__content :global(p) {
            font-size: 1.6rem;
        }

        .cd-timeline__date {
            font-size: 1.4rem;
        }
    }

    @media only screen and (min-width: 1170px) {
        .cd-timeline__content {
            margin-left: 0;
            padding: 1.6em;
            width: 45%;
            /* Force Hardware Acceleration */
            -webkit-transform: translateZ(0);
            transform: translateZ(0);
        }

        .cd-timeline__content::before {
            top: 24px;
            left: 100%;
            border-color: transparent;
            border-left-color: white;
        }

        .cd-timeline__date {
            position: absolute;
            width: 100%;
            left: 122%;
            top: 6px;
            font-size: 1.6rem;
        }

        .cd-timeline__block:nth-child(even) .cd-timeline__content {
            float: right;
        }

        .cd-timeline__block:nth-child(even) .cd-timeline__content::before {
            top: 24px;
            left: auto;
            right: 100%;
            border-color: transparent;
            border-right-color: white;
        }

        .cd-timeline__block:nth-child(even) .cd-timeline__date {
            left: auto;
            right: 122%;
            text-align: right;
        }
    }

    @-webkit-keyframes cd-bounce-2 {
        0% {
            opacity: 0;
            -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
        }
        60% {
            opacity: 1;
            -webkit-transform: translateX(20px);
            transform: translateX(20px);
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
    }

    @keyframes cd-bounce-2 {
        0% {
            opacity: 0;
            -webkit-transform: translateX(-100px);
            transform: translateX(-100px);
        }
        60% {
            opacity: 1;
            -webkit-transform: translateX(20px);
            transform: translateX(20px);
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
    }

    @-webkit-keyframes cd-bounce-2-inverse {
        0% {
            opacity: 0;
            -webkit-transform: translateX(100px);
            transform: translateX(100px);
        }
        60% {
            opacity: 1;
            -webkit-transform: translateX(-20px);
            transform: translateX(-20px);
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
    }

    @keyframes cd-bounce-2-inverse {
        0% {
            opacity: 0;
            -webkit-transform: translateX(100px);
            transform: translateX(100px);
        }
        60% {
            opacity: 1;
            -webkit-transform: translateX(-20px);
            transform: translateX(-20px);
        }
        100% {
            -webkit-transform: translateX(0);
            transform: translateX(0);
        }
    }

</style>
