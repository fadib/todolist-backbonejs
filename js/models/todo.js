var app = app || {};

app.Todo = Backbone.Model.extend({
  defaults: {
    title: '',
    completed: false,
    starred: false
  },
  
  toggle: function() {
    this.save({
      completed: !this.get('completed')
    });
  },
  
  togglerating: function() {
    this.save({
      starred: !this.get('starred')
    });
  }
});