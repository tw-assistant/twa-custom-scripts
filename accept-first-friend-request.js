// @name Accept First Friend Request
// @step {gameUrl}/game.php?screen=buddies

function delay(time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

async function main() {
    const acceptButtons = $("a[href*='action=approve_buddy']");
    if (!acceptButtons) return;
    acceptButtons[0].click();
}

main();