const fs = require('fs');
const path = require('path');
const p1 = 'C:/Users/rishun/OneDrive/Portfolio website/Website_for_my_portfolio/src';
const p2 = p1 + '/components';

function del(d) {
  let files = fs.readdirSync(d);
  files.forEach(f => {
    if (f.endsWith('.jsx')) {
      fs.unlinkSync(path.join(d, f));
      console.log('Deleted ' + f);
    }
  });
}
del(p1);
del(p2);