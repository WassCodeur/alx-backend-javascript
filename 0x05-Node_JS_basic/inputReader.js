process.stdin.setEncoding('utf8');

console.log('Veuillez entrer quelque chose (appuyez sur Ctrl + D pour terminer) : ');

process.stdin.on('data', (data) => {
    console.log(`Vous avez entré : ${data}`);
});

process.stdin.on('end', () => {
    console.log('Le processus a été interrompu (SIGINT)');
    // Faire quelque chose avant de quitter, si nécessaire
    process.exit(0);
});

