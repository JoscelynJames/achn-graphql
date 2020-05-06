const graphql = require('graphql');

const { GraphQLEnumType } = graphql;

const paneTypeEnum = new GraphQLEnumType({
	name: 'paneTypeEnum',
	values: {
		'Glass': { value: 'Glass' },
		'Screen': { value: 'Screen' },
	}
});

module.exports = paneTypeEnum;