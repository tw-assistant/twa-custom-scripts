// @name Configure NopeCHA
// @param(string) apiSecret

function delay(time, random = 0) {
    return new Promise(function (resolve) {
        setTimeout(resolve, time + ~~(Math.random() * random));
    });
}

new Promise(async (resolve, reject) => {

    const apiSecret = TWA.apiSecret
    if (!apiSecret) throw 'apiSecret is required';

    const catpchaParams = {
        "enabled": true,
        "disabled_hosts": [],
        "hcaptcha_auto_open": true,
        "hcaptcha_auto_solve": true,
        "hcaptcha_solve_delay": true,
        "hcaptcha_solve_delay_time": 3000,
        "recaptcha_auto_open": true,
        "recaptcha_auto_solve": true,
        "recaptcha_solve_delay": true,
        "recaptcha_solve_delay_time": 1000,
        "recaptcha_solve_method": "Image",
        "funcaptcha_auto_open": true,
        "funcaptcha_auto_solve": true,
        "funcaptcha_solve_delay": true,
        "funcaptcha_solve_delay_time": 1000,
        "awscaptcha_auto_open": true,
        "awscaptcha_auto_solve": true,
        "awscaptcha_solve_delay": true,
        "awscaptcha_solve_delay_time": 1000,
        "textcaptcha_auto_solve": true,
        "textcaptcha_solve_delay": true,
        "textcaptcha_solve_delay_time": 100,
        "textcaptcha_image_selector": "",
        "textcaptcha_input_selector": ""
    };

    const _baseSetupUrl = 'https://nopecha.com/setup';
    const _params = Object.keys(catpchaParams)
        .map(key => `${key}=${catpchaParams[key]}`)
        .join('|');

    const _fullUrl = `${_baseSetupUrl}#${apiSecret}|${_params}`;

    const _configWindow = window.open(_fullUrl, '_blank');

    setTimeout(() => {
        _configWindow.close();
        resolve();
    }, 10000);
})
