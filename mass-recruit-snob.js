// @name Mass Recruit Snob
// @param(string) groupId=0
// @param(number) numberOfSnob=1
// @step {gameUrl}/game.php?screen=train&mode=mass&group={groupId}

function delay (time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

new Promise(async (resolve, reject) => {
    const numberOfSnob = TWA.numberOfSnob || 1;

    $('input#unit_input_snob.unit_input_field').val(`${numberOfSnob}`);

    await delay(3000, 1000);
    $('[value="Inserir tropas"]')[0].click()

    await delay(3000, 1000);
    $('[class="btn btn-recruit"]')[0].click()

    resolve();
})