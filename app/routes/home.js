import app from 'app';

app.config(function ($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    templateProvider: function() {
      return '<menu></menu>';
    }
  }).state('house', {
    url: '/house',
    templateProvider: function() {
      return '<h1>oli</h1>';
    }
  }).state('perritos', {
    url: '/perro',
    templateProvider: function() {
      return 'wuaff';
    }
  });
});
