function BoardController($scope, $element, $attrs) {
    var ctrl = this;

    ctrl.title = 'Board Component'
}

angular
    .module('app')
    .component('board', {
        templateUrl: 'components/board/board.html',
        bindings: {
            cards: '<'
        },
        controller: BoardController
    });