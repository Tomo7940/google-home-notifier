const googlehome = require('google-home-notifier')
const language = 'ja';

googlehome.device('Google-Home', language);

googlehome.notify('あんなさん、そうたさん。お休みの時間です。', function(res) {
    console.log(res);
});