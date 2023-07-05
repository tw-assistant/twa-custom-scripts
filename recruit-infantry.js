// @name Recruit Infantry
// @step {gameUrl}/game.php?screen=barracks
// @param(string) troop=spear
// @param(number) quantity=10
// @param(number) queueSize=3

function delay(time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

new Promise(async (resolve, reject) => {
    try {
        // Sortable row só funfa quando tem 3 ou mais ordens...
        // if ($(`.sortable_row .${TWA.troop}`).length >= TWA.queueSize) return resolve();
        if ($(`.unit_sprite.unit_sprite_smaller.${TWA.troop}`).length >= TWA.queueSize) return resolve();

        const max = parseInt($(`input[name='${TWA.troop}']`).parent()[0].textContent.trim().replace(/\(|\)/g, ''))

        $(`input[name='${TWA.troop}']`).val(max > TWA.quantity ? TWA.quantity : max);
        await delay(1000, 300);

        $(".btn.btn-recruit").click()
        await delay(1000, 300);
    } catch (error) { }

    resolve();
});
