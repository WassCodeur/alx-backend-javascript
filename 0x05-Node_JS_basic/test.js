// Gestionnaire d'événement pour l'événement 'exit'
process.on('exit', (code) => {
    console.log(`Le processus va se terminer avec le code ${code}`);
});

// Gestionnaire d'événement pour l'événement 'uncaughtException'
process.on('uncaughtException', (err) => {
    console.error('Erreur non capturée :', err);
    // Faire quelque chose avec l'erreur, par exemple, logger et quitter proprement.
    process.exit(1); // Terminer le processus avec un code d'erreur
});

// Gestionnaire d'événement pour l'événement 'warning'
process.on('warning', (warning) => {
    console.warn('Avertissement :', warning);
});

// Gestionnaire d'événement pour l'événement personnalisé 'monEvenement'
process.on('yourName', (name) => {
    console.log(`your name is ${name}`);
});

// Émettre un événement personnalisé 'monEvenement'
process.emit('warning', 'attention');
process.emit('uncaughException', 'Fatal error sorry')
if( process.argv[2] != undefined)
	process.emit('yourName', process.argv[2]);

process.on('SIGINT', () => {
    console.log('Le processus a été interrompu (SIGINT)');
    // Faire quelque chose avant de quitter, si nécessaire
    process.exit(0);
});

