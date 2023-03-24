// @name Check Promo and send discord message
// @step {gameUrl}/game.php?screen=overview
// @param(string) discordWebhook=https://discord.com/api/webhooks/...

if ($("#header_info [onclick*='Premium.buy']").length > 0) {
    const { id, name } = TribalWars.getGameData().player;
    const message = {
        "content": "Premium promo is available",
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