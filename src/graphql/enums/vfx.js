const graphql = require('graphql');

const { GraphQLEnumType } = graphql;

const vfxEnumType = new GraphQLEnumType({
	name: 'vfxEnumType',
	values: {
		'LightOff': { value: 'LightOff' },
		'Random': { value: 'Random' },
		'Synchro': { value: 'Synchro' },
	}
});

module.exports = vfxEnumType;