// @name Recruit Knight
// @step {gameUrl}/game.php?screen=statue

function delay(time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

async function main() {
    const recruitButton = $(".knight_recruit_launch:visible")[0]
    if (recruitButton) {
        recruitButton.click();
        await delay(2000, 300);
    }

    const confirmButton = $("#knight_recruit_confirm:visible")[0]
    if (confirmButton) {
        confirmButton.click();
        await delay(2000, 300);
    }

    const popupCloseButton = $("#popup_box_quest .popup_box_close:visible")[0];
    if (popupCloseButton) {
        popupCloseButton.click();
        await delay(2000, 300);
    }

    const rushButton = $(".knight_recruit_rush.btn-instant-free:visible")[0];
    if (rushButton) {
        rushButton.click();
        await delay(2000, 300);
    }

    const reviveButton = $(".knight_revive_launch:visible")[0]
    if (reviveButton) {
        reviveButton.click();
        await delay(2000, 300);
    }

    const reviveConfirmButton = $("#knight_revive_confirm:visible")[0]
    if (reviveConfirmButton) {
        reviveConfirmButton.click();
        await delay(2000, 300);
    }
}

main();