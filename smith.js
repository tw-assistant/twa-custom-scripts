// @name Smith
// @step {gameUrl}/game.php?screen=smith
// @param(string) research=all

function delay(time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

async function main() {
    const units = ['spear', 'sword', 'axe', 'archer', 'spy', 'light', 'marcher', 'heavy', 'ram', 'catapult', 'knight', 'snob'];
    const researchButton = units.includes(TWA.research) ?
        $(`.btn.btn-research[onclick*='${TWA.research}']`)[0] :
        $(".btn.btn-research")[0];
    if (!researchButton) return;
    researchButton.click();
}

main();