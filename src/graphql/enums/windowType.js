import { GraphQLEnumType } from 'graphql';

const windowTypeEnum = new GraphQLEnumType({
	name: 'windowTypeEnum',
	values: {
		'Arch': { value: 'Arch' },
		'Circle': { value: 'Circle' },
		'FourPane': { value: 'Four Pane' },
		'SinglePane': { value: 'Single Pane' },
		'SlidingPane': { value: 'Sliding Pane' },
	}
});

export default windowTypeEnum;