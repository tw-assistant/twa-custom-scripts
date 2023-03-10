// @name Recruit Knight
// @step {gameUrl}/game.php?screen=statue

function delay(time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

new Promise(async (resolve, reject) => {
    try {
        $(".knight_recruit_launch").click();
        await delay(1000, 300);

        $("#knight_recruit_confirm").click();
        await delay(1000, 300);

        if ($("#popup_box_quest").length > 0) {
            $("#popup_box_quest .popup_box_close").click();
            await delay(1000, 300);
        }

        $(".knight_recruit_rush.btn-instant-free").click();
        await delay(1000, 300);
    } catch (error) { }

    resolve();
});