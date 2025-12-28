const {Button, TextView, contentView} = require('tabris');

// Affichage du niveau de batterie
const statusLabel = new TextView({
  top: 100, left: 20, right: 20,
  alignment: 'center',
  text: 'Chargement des infos...'
}).appendTo(contentView);

window.addEventListener("batterystatus", (status) => {
  statusLabel.text = "Batterie : " + status.level + "%";
}, false);

// Bouton notification
new Button({
  top: 'prev() 20', centerX: 0,
  text: 'Tester Notification'
}).on('select', () => {
  if (window.cordova) {
    cordova.plugins.notification.local.schedule({
      title: 'Alerte Traqueur',
      text: 'Le suivi est activé',
      foreground: true
    });
  }
}).appendTo(contentView);
