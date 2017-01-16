import app from '../app';

app.service('manageProjects',  function()  {
	this.form = [];
	this.setNewForm = (newForm)  => {
		this.form.push(newForm);
	};

	this.getForms = () => {
		return this.form;
	}

});
