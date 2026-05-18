const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const resolvedSpecsDir = path.resolve(__dirname, '../../api-specs');
const resolvedOutputDir = path.resolve(__dirname, '../src');

if (!fs.existsSync(resolvedSpecsDir)) {
  console.error(`Specs directory not found: ${resolvedSpecsDir}`);
  process.exit(1);
}

const files = fs.readdirSync(resolvedSpecsDir).filter(file => file.endsWith('.yaml'));

files.forEach(file => {
  const specPath = path.join(resolvedSpecsDir, file);
  const outputFileName = file.replace('.yaml', '.ts');
  const outputPath = path.join(resolvedOutputDir, outputFileName);

  console.log(`Generating types for ${file}...`);
  execSync(`npx openapi-typescript "${specPath}" -o "${outputPath}"`);
});

console.log('✅ All types generated successfully!');
