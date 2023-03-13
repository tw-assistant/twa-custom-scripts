// @name Use Inventory Item
// @step {gameUrl}/game.php?screen=inventory

function delay(time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

async function main() {
    const itemSelectButton = $(`#${TWA.itemId}`);
    if (itemSelectButton) {
        itemSelectButton.click();
        await delay(1000);
    }

    const useItemButton = $(".detail_actions .btn")[0];
    if (useItemButton) {
        useItemButton.click();
        await delay(1000);
    }

    const confirmYes = $(".evt-confirm-btn");
    if (confirmYes) {
        confirmYes.click();
        await delay(1000);
    }

    // use cases
    // 1. use item for realocate
    // 2. use all resource items
    // 3. use specific resource item
}

main();