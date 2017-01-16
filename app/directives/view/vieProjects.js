import app from 'app';
import view from 'views/view/viewProjects.html';

import '../../services/manageProjects'
app.directive('viewProjects', function () {
  return {
    restrict: 'E',
    templateUrl: view,
    bindToController: true,
    controllerAs: 'viewProjects',
    controller: function (manageProjects) {
      this.projects = manageProjects.getForms();
      console.log(this.projects);
    }
  };
});