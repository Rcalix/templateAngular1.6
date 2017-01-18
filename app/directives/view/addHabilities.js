import app from 'app';
import view from 'views/view/addHabilities.html';

app.directive('addHabilities', function () {
  return {
    restrict: 'E',
    templateUrl: view,
    bindToController: true,
    controllerAs: 'addHabilities',
    controller: function () {
    	this.habilityList  = [{name: 'Play Guitar', wanted:false}, {name: 'Frontend Dev', wanted:false}, {name: 'Master on Git', wanted:false}, {name: 'Gamer', wanted:false}, {name: 'Designer', wanted:false}];
     	console.log('add habilities');
     	this.savedHability = [];
        this.saveNewHability = () => {
        	this.savedHability = [];
        	for (var i = 0; i <= this.habilityList.length -1; i++) {
        		if (this.habilityList[i].wanted) {
        			this.savedHability.push(this.habilityList[i])
        		}
        	}
      };    
    }
  };
});