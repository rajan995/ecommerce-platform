import express from 'express';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = process.env.PORT || 3000;

const SPECS_DIR = path.join(__dirname, '../../../packages/api-specs');

// Helper to load YAML files from the specs directory
const loadSpecs = () => {
  const files = fs.readdirSync(SPECS_DIR);
  return files
    .filter(file => file.endsWith('.yaml'))
    .map(file => ({
      name: file.replace('.yaml', ''),
      path: path.join(SPECS_DIR, file)
    }));
};

const specs = loadSpecs();

// Create a combined Swagger UI
// For simplicity in this setup, we'll serve them via a query param or different routes
// but here we implement a simple route-based approach for each service
specs.forEach(spec => {
  const swaggerDocument = YAML.load(spec.path);
  app.use(`/docs/${spec.name}`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));
});

// Root docs page with links to all services
app.get('/docs', (req, res) => {
  const links = specs.map(s => `<li><a href="/docs/${s.name}">${s.name} Service API</a></li>`).join('');
  res.send(`
    <html>
      <head><title>e-app API Documentation</title></head>
      <body style="font-family: sans-serif; padding: 2rem;">
        <h1>e-app Developer Portal</h1>
        <p>Select a service to view its API specification:</p>
        <ul>${links}</ul>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`🚀 API Docs portal running at http://localhost:${PORT}/docs`);
});
