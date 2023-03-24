// @name Check Promo and send discord message
// @step {gameUrl}/game.php?screen=overview
// @param(string) discordWebhook=https://discord.com/api/webhooks/...

if ($("#header_info [onclick*='Premium.buy']").length > 0) {
    const { id, name } = TribalWars.getGameData().player;

    let text = null;
    try {
        text = $("#header_info [onclick*='Premium.buy']")[0].textContent.replaceAll('\t','').replaceAll('\n',' ').trim();
    } catch (error) { }

    const message = {
        "content": text || "Premium promo is available",
        "username": `${name} (${id})`,
    }

    fetch(TWA.discordWebhook, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
    })
}