import { GraphQLEnumType } from 'graphql';

const paneTypeEnum = new GraphQLEnumType({
	name: 'paneTypeEnum',
	values: {
		'Glass': { value: 'Glass' },
		'Screen': { value: 'Screen' },
	}
});

export default paneTypeEnum;