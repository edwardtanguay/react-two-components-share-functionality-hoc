import _config from './config.json';

class Config {

	constructor(config) {
		this.config = config;
	}

	getCurrentEnvironmentIdCode() {
		// return 'development';
		// return 'testing';
		// return 'production';
		return process.env.REACT_APP_ENVIRONMENT;
	}

	getDataSources() {
		return this.config.environment[this.getCurrentEnvironmentIdCode()].data;
	}
}

export const config = new Config(_config);