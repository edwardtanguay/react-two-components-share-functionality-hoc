import _config from './config.json';

class Config {

	constructor(config) {
		this.config = config;
	}

	getCurrentEnvironmentIdCode() {
		return 'production';
	}

	getDataSources() {
		return this.config.environment[this.getCurrentEnvironmentIdCode()].data;
	}
}

export const config = new Config(_config);