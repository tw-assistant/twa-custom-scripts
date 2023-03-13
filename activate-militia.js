// @name Activate Militia
// @step {gameUrl}/game.php?screen=farm

function delay(time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

async function main() {
    const hasIncomings = $("#incomings_cell").length > 0;
    if (!hasIncomings) return;

    const establishMilitiaButton = $("#content_value .btn:not(.evt-confirm)");
    if (establishMilitiaButton) {
        establishMilitiaButton.click(); 
        await delay(1000);
    }

    const callMilitia = $("#content_value .evt-confirm.btn");
    if (callMilitia) {
        callMilitia.click();
        await delay(1000);
    }

    const confirmYes = $(".btn-confirm-yes");
    if (confirmYes) {
        confirmYes.click();
        await delay(1000);
    }
}

main();