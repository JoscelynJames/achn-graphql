
import { GraphQLEnumType } from 'graphql';

const weatherEnum = new GraphQLEnumType({
	name: 'weatherEnum',
	values: {
		'AnyExceptRain': { value: 'Any except rain' },
		'AnyWeather': { value: 'Any weather' },
		'RainOnly': { value: 'Rain only' },
	}
});

export default weatherEnum;