const fse = require("fs-extra");

const srcDir = "src/images";
const destDir = "dist/images";

fse.copySync(srcDir, destDir);
