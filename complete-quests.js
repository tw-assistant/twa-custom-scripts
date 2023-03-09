// @name Complete quests
// @step {gameUrl}/game.php?screen=overview

function delay(time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

async function navigateToQuests() {
    console.log("Navigate to quests");
    try {
        $(".quest").click();
        await delay(1000);
    } catch (error) {
        console.log(error);
    }
    try {
        $("[data-tab='main-tab']").click();
        await delay(1000);
    } catch (error) {
        console.log(error);
    }
}


async function completeQuest() {
    console.log("Complete quest");
    const questCompleteButton = $(".quest-popup-content .quest-complete-btn")[0];
    if (!questCompleteButton) return;
    questCompleteButton.click();
}

async function openNextQuest() {
    const questLinks = Array.from($(".quest-link[data-questline-id]"));
    const indexOfSelected = questLinks.findIndex((questLink) => questLink.classList.contains("selected"));
    const nextQuestLink = questLinks[indexOfSelected + 1];
    if (nextQuestLink) {
        console.log("Open next quest");
        nextQuestLink.click();
        return;
    }
    const questlineHeader = $(".questline-header:not(.header-opened)")[0];
    if (!questlineHeader) return;
    console.log("Open next quest header");
    questlineHeader.click();
}

async function execute() {
    if ($(".quest-popup-content .quest-complete-btn").length > 0) {
        await completeQuest();
    } else if ($(".quest-popup-content").length > 0) {
        await openNextQuest();
    } else {
        await navigateToQuests();
    }
}


new Promise(async (resolve, reject) => {
    setInterval(execute, 2000);
    await delay(30000);
    window.location.reload();
    resolve();
});