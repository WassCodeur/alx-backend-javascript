const express = require('express');
const app = express();
const port = 8080; // Port personnalisé

// Configuration des routes
app.get('/', (req, res) => {
  res.send('Bonjour, Express!');
});

// Démarrage du serveur
app.listen(port, () => {
  console.log(`Serveur Express en cours d'exécution sur http://localhost:${port}`);
});

