const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const SPECS_DIR = path.join(__dirname, '../api-specs'); // This is wrong, it's at ../../api-specs relative to scripts/
const OUTPUT_DIR = path.join(__dirname, '../src');

// Fix SPECS_DIR to be relative to the project root or correctly relative to this script
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
  execSync(`npx openapi-typescript ${specPath} -o ${outputPath}`);
});

console.log('✅ All types generated successfully!');
