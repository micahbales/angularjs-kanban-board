angular
    .module('app')
    .component('card', {
        templateUrl: 'components/card/card.html',
        bindings: {
            card: '<',
        }
    });