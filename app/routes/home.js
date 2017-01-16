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
      return '<view-projects></view-projects>';
    }
  });
});
