// @name Add Friend
// @step {gameUrl}/game.php?screen=buddies
// @param(string) friend=

function delay(time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

async function main() {
    const nameInput = $("input[name='name']");
    if (!nameInput) return;    
    nameInput.val(TWA.friend);
    const addButton = $("[data-type='player']");
    if (!addButton) return;
    addButton.click();
}

main();