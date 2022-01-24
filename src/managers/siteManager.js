import { InfoBox } from '../components/InfoBox';

export const siteManager = Component => {
	return (props) => {
		return <Component {...props} InfoBox={InfoBox} />
	}
}