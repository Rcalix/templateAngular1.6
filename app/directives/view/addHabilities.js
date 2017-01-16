import app from 'app';
import view from 'views/view/addHabilities.html';

app.directive('addHabilities', function () {
  return {
    restrict: 'E',
    templateUrl: view,
    bindToController: true,
    controllerAs: 'addHabilities',
    controller: function () {
      console.log('add habilities');
    }
  };
});