import app from 'app';
import view from 'views/view/addProjects.html';

import '../../services/manageProjects'

app.directive('addProjects', function () {
  return {
    restrict: 'E',
    templateUrl: view,
    bindToController: true,
    scope: {
    	model: '=ngModel'
    },
    controllerAs: 'addProjects',
    controller: function ($scope, manageProjects) {
      this.aplicationList = [{type: 'Theme'}, {type: 'Blog'}, {type: 'Social Network'}, {type: 'Marketing'}, {type: 'Shopping Site'}];
      this.attachments = ['css','html','javascript', 'Node', 'Ptyhon'];
      this.imagePath = 'https://api.adorable.io/avatars/133/.png';
      this.disabled = true;
      this.resetForm = () => {
      	this.form = {
      	title: '',
      	description: '',
      	content: '',
      	type: '',
      	tags: this.attachments
      	}
      };

      this.resetForm();
      $scope.$watch(() => this.form, (form) => {
			if (form.title  && form.description  && form.content  && form.type  ) {
				this.disabled = false;
			} else {
				this.disabled = true;
			}

	  },true);

      this.saveNewProject = () => {
      	manageProjects.setNewForm(this.form);
        console.log(this.form)
      	this.resetForm();
      };
    }
  };
});