// @name Train Paladin
// @param(string) palaId=0
// @param(number) opcaoTreino=1
// @param(number) reduzTempoComPps=0
// @step {gameUrl}/game.php?screen=statue&knight={palaId}&mode=knight

function delay (time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

new Promise(async (resolve, reject) => {

    const opcaoTreino = TWA.opcaoTreino ?? 1;
    const reduzTempoComPps = TWA.reduzTempoComPps ?? 0;

    const opcaoClick = 2 + opcaoTreino;

    if (!document.querySelector("#knight_activity > span")) {
        document.querySelector("#knight_actions > div > a").click();
        await delay(1000, 300);
        document.querySelector(`#popup_box_knight_regimens > div > div:nth-child(${opcaoClick}) > div.actions.center > a:nth-child(1)`).click();

        if (reduzTempoComPps > 0){
            for (let contador = 0; contador < reduzTempoComPps; contador += 1) {
                await delay(1000, 300);
                document.querySelector(`#knight_actions a.knight_train_rush`).click()
                await delay(1000, 300);
                document.querySelector(`.btn.evt-confirm-btn.btn-confirm-yes`).click()
            }
        }
    }
    
    resolve();
})
