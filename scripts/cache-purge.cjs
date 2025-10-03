const fs = require('fs');
const path = require('path');

const tmpDir = path.resolve(__dirname, '..', 'tmp');

if (fs.existsSync(tmpDir)) {
  fs.rmSync(tmpDir, { recursive: true, force: true });
}

fs.mkdirSync(tmpDir, { recursive: true });
