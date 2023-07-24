// @name Train Knight
// @param(string) knightId=0
// @enum option faster,fast,normal,slow,slower
// @param(enum:option) trainOption=faster
// @param(number) usePPToReduceTime=0
// @step {gameUrl}/game.php?screen=statue&knight={knightId}&mode=knight

function delay (time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

new Promise(async (resolve, reject) => {
    const trainOption = TWA.trainOption ?? 'normal';
    const usePPToReduceTime = TWA.usePPToReduceTime ?? 0;

    const options = ['faster', 'fast', 'normal', 'slow', 'slower'];

    const clickOption = 3 + options.indexOf(trainOption);

    if (!document.querySelector("#knight_activity > span")) {
        document.querySelector("#knight_actions > div > a").click();
        await delay(1000, 300);
        document.querySelector(`#popup_box_knight_regimens > div > div:nth-child(${clickOption}) > div.actions.center > a:nth-child(1)`).click();

        if (usePPToReduceTime > 0){
            for (let c = 0; c < usePPToReduceTime; c += 1) {
                await delay(1000, 300);
                document.querySelector(`#knight_actions a.knight_train_rush`).click()
                await delay(1000, 300);
                document.querySelector(`.btn.evt-confirm-btn.btn-confirm-yes`).click()
            }
        }
    }
    
    resolve();
})
