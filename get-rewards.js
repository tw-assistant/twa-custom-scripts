// @name Get Rewards
// @step {gameUrl}/game.php?screen=overview

function delay(time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

async function navigateToRewards() {
    try {
        $(".quest").click();
        await delay(1000);
    } catch (error) {
        console.log(error);
    }
    try {
        $("[data-tab='reward-tab']").click();
        await delay(1000);
    } catch (error) {
        console.log(error);
    }
}


async function getReward() {
    const rewardButton = $("#reward-system-rewards .reward-system-claim-button")[0];
    if (!rewardButton) return;
    try {
        const warning = $(rewardButton).parent().find(".small.warn")[0];
        if (warning) return;
    } catch (error) {
        console.log(error);
    }
    rewardButton.click();
}



new Promise(async (resolve, reject) => {
    await navigateToRewards();
    setInterval(getReward, 1000);
    await delay(10000);
    resolve();
});