const fs = require('fs');
const path = require('path');
const root = process.cwd();
const exts = ['.js','.jsx','.ts','.tsx'];
const files = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) {
      if (name.name === 'node_modules' || name.name === '.git') continue;
      walk(full);
    } else if (exts.includes(path.extname(name.name))) {
      files.push(full);
    }
  }
}
walk(root);
const importRegex = /import\s+(?:[^'";]+?)?from\s+['\"]([^'\"]+)['\"];?|import\s+['\"]([^'\"]+)['\"];?|require\(\s*['\"]([^'\"]+)['\"]\s*\)/g;
const invalids = [];
for (const file of files) {
  const src = fs.readFileSync(file, 'utf8');
  let m;
  while ((m = importRegex.exec(src))) {
    const mod = m[1] || m[2] || m[3];
    if (!mod) continue;
    if (mod.startsWith('.') || mod.startsWith('/')) {
      const resolved = path.resolve(path.dirname(file), mod);
      const candidates = [
        resolved,
        resolved + '.js',
        resolved + '.jsx',
        resolved + '.ts',
        resolved + '.tsx',
        path.join(resolved, 'index.js'),
        path.join(resolved, 'index.jsx'),
        path.join(resolved, 'index.ts'),
        path.join(resolved, 'index.tsx'),
      ];
      const exists = candidates.some((p) => {
        if (!fs.existsSync(p)) return false;
        return fs.statSync(p).isFile();
      });
      if (!exists) {
        invalids.push({ file: path.relative(root, file), mod });
      }
    }
  }
}
if (invalids.length === 0) {
  console.log('OK: no invalid relative imports found');
  process.exit(0);
}
for (const inv of invalids) {
  console.log(`${inv.file} -> ${inv.mod}`);
}
process.exit(1);
