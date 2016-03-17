var generators = require('yeoman-generator');
var path = require('path');

module.exports = generators.Base.extend({
	constructor: function() {
		generators.Base.apply(this, arguments);

		this.templateData = {};

		this.argument('applicationName', { 
			type: String, 
			required: false,
			desc: 'Project Name' });
	},

	prompting: function () {
		if(this.applicationName) {
			this._buildTemplateData();
			return;
		}

		var done = this.async();

		this.prompt({
			type    : 'input',
			name    : 'name',
			message : 'Your application name',
			default : this.appname // Default to current folder name
		}, function (answers) {
			this.applicationName = answers.name;
			this._buildTemplateData();
			done();
		}.bind(this));
	},

	_buildTemplateData: function() {
		this.templateData.applicationName = this.applicationName;
	},

	writing: function() {
		this.sourceRoot(path.join(__dirname, '../templates'));

		var destination = function(destPath) {
			return path.join(this.destinationRoot(), destPath);
		}.bind(this);

		var source = function(sourcePath) {
			return path.join(this.sourceRoot(), sourcePath);
		}.bind(this);

		this.directory(source('/'), destination('/'));
	},

	install: function() {
		this.npmInstall();
	}
});