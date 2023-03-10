// @name Recruit Knight
// @step {gameUrl}/game.php?screen=statue
// @param(string) executionKey=first-knight

function hasToRecruitKnight() {
    try {
        const hasAlreadyRecruited = localStorage.getItem(btoa(TWA.executionKey));
        return !hasAlreadyRecruited;
    } catch (e) {
        return true;
    }
}

function setKnightAsRecruited() {
    try {
        localStorage.setItem(btoa(TWA.executionKey), true);
    } catch (e) {
        console.log('Error setting knight as recruited', e);
    }
}

function delay(time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

new Promise(async (resolve, reject) => {
    if (!hasToRecruitKnight()) return;

    try {
        $(".knight_recruit_launch").click();
        await delay(2000, 300);

        $("#knight_recruit_confirm").click();
        await delay(2000, 300);

        if ($("#popup_box_quest").length > 0) {
            $("#popup_box_quest .popup_box_close").click();
            await delay(2000, 300);
        }

        $(".knight_recruit_rush.btn-instant-free").click();
        await delay(2000, 300);
    } catch (error) { }

    setKnightAsRecruited();

    resolve();
});