import { GraphQLEnumType } from 'graphql';

const interactEnum = new GraphQLEnumType({
	name: 'interactEnum',
	values: {
		'Trash': {type: 'Trash'},
		'Wardrobe': {type: 'Wardrobe'},
		'Workbench': {type: 'Workbench'},
	}
});

export default interactEnum;