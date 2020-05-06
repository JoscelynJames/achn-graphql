import { GraphQLEnumType } from 'graphql';

const curtainTypeEnum = new GraphQLEnumType({
	name: 'curtainTypeEnum',
	values: {
		'Curtains': { value: 'Curtains' },
		'RollerShades': { value: 'Roller Shades' },
		'SlattedBlinds': { value: 'Slatted Blinds' },
	}
});

export default curtainTypeEnum;