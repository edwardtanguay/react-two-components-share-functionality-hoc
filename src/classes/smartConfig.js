import _config from '../config.json';

export class SmartConfig {

	constructor(config) {
		this.config = config;
	}

	getDataSources() {
		return 'test222';
	}

	static instantiate() {
		return new SmartConfig(_config);
	}
}