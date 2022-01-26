import _config from './config.json';

class Config {

	constructor(config) {
		this.config = config;
		this.mockPageWaitTime = 0;
		this.dataSources = this.config.environment[this.getCurrentEnvironmentIdCode()].data;
	}

	getCurrentEnvironmentIdCode() {
		// return 'development';
		// return 'testing';
		return 'production';
		// return process.env.REACT_APP_ENVIRONMENT;
	}
}

export const config = new Config(_config);