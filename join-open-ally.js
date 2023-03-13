// @name Join Open Ally
// @step {gameUrl}/game.php?screen=info_ally&id={allyId}
// @param(string) allyId=null

function delay(time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

async function main() {
    const joinButton = $("a.evt-confirm[href*='action=join']");
    if (joinButton) {
        joinButton.click();
        await delay(1000);
    }

    const confirmYes = $(".btn-confirm-yes");
    if (confirmYes) {
        confirmYes.click();
        await delay(1000);
    }
}

main();