const {execSync} = require('child_process');

(async () => {
    const i = execSync('pm2 update');
    console.log(i.toString());
})();