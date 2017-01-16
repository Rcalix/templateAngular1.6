import app from 'app';
import view from 'views/view/viewHabilities.html';

app.directive('viewHabilities', function () {
  return {
    restrict: 'E',
    templateUrl: view,
    bindToController: true,
    controllerAs: 'viewHabilities',
    controller: function () {
      console.log('view habilities');
    }
  };
});