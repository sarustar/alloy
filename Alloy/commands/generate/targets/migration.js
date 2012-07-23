var path = require('path'),
	fs = require('fs'),
	U = require('../../../utils'),
	GU = require('../generateUtils'),
	CONST = require('../../../common/constants'),
	_ = require("../../../lib/alloy/underscore")._,
	logger = require('../../../common/logger');

module.exports = function(name, args, program) {
	var migrationsDir = path.join(program.outputPath,'migrations');
	U.ensureDir(migrationsDir);
	
	var templatePath = path.join(__dirname,'..','..','..','template','migration.' + CONST.FILE_EXT.MIGRATION);
	var mf = path.join(migrationsDir, GU.generateMigrationFileName(name));
	var md = _.template(fs.readFileSync(templatePath,'utf8'),{up:'',down:''});
	fs.writeFileSync(mf,md);

	logger.info('Generated empty migration named '+name);
}