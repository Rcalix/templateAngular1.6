import app from 'app';
import view from 'views/menu.html';

app.directive('menu', function () {
  return {
    restrict: 'E',
    templateUrl: view,
    bindToController: true,
    controllerAs: 'menu',
    controller: function () {
      this.show = false;
      this.listOption;
      this.listMenu = [{name: 'view projects', action: 'viewProject'}, 
                        {name: 'add projects', action: 'addProject'} ,
                        {name: 'view Habilities', action: 'viewHabilities'}, 
                        {name: 'add Habilities', action: 'addHabilities'}]
      this.sayHello = () => {
        console.log('hello');
      };

    this.showMenu = ()  => {
      if (this.show) {
        this.show = false;
      } else {
        this.show = true;
      }
    }

    this.navigation = (option) => {
      this.show = false;
      this.listOption = option;
    }
    }
  };
});
