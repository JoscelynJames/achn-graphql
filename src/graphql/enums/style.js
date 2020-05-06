import { GraphQLEnumType } from 'graphql';

const styleEnum = new GraphQLEnumType({
	name: 'styleEnum',
	values: {
		'Active': {type: 'Active'},
		'Cool': {type: 'Cool'},
		'Cute': {type: 'Cute'},
		'Elegant': {type: 'Elegant'},
		'Gorgeous': {type: 'Gorgeous'},
		'Simple': {type: 'Simple'},
	}
});

export default styleEnum;