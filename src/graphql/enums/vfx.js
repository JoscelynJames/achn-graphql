import { GraphQLEnumType } from 'graphql';

const vfxEnumType = new GraphQLEnumType({
	name: 'vfxEnumType',
	values: {
		'LightOff': { value: 'LightOff' },
		'Random': { value: 'Random' },
		'Synchro': { value: 'Synchro' },
	}
});

export default vfxEnumType;