
// @name Upgrade Knight
// @step {gameUrl}/game.php?screen=statue
// @param(boolean) upgradeAttack=false
// @param(boolean) upgradeUtility=true
// @param(boolean) upgradeDefense=true

const TWA = {
    upgradeAttack: false,
    upgradeUtility: true,
    upgradeDefense: true,
}

function delay(time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

const skills = {
    upgradeAttack: [1,2,3,4],
    upgradeUtility: [5,6,7,8],
    upgradeDefense: [9,10,11,12],
}

async function upgradeSkill(skill) {
    const skillButton = $(`.skill_node.learnable[data-skill=${skill}]:visible`)[0];
    if (!skillButton) return false;
    skillButton.click();
    await delay(2000);
    const studyButton = $(".knight_study_skill:visible")[0];
    if (!studyButton) return false;
    studyButton.click();
    await delay(2000);
    return true;
}

async function upgradeTree(tree) {
    let index = 0;
    while (true) {
        console.log(`Upgrading skill ${tree[index]}`);
        const upgraded = await upgradeSkill(tree[index]);
        if (upgraded) continue;
        index++;
        if (index >= tree.length) break;
    }
}

async function main() {
    if(TWA.upgradeAttack) {
        await upgradeTree(skills.upgradeAttack);
    }

    if(TWA.upgradeUtility) {
        await upgradeTree(skills.upgradeUtility);
    }

    if(TWA.upgradeDefense) {
        await upgradeTree(skills.upgradeDefense);
    }
}

main();