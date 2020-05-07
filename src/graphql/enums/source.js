
import { GraphQLEnumType } from 'graphql';

const sourceEnum = new GraphQLEnumType({
	name: 'sourceEnum',
	values: {
		'ResidentServicesUpgrade': { value: 'Resident Services Upgrade' },
		'The3RDHouseUpgradeLeftRoom': { value: '3rd House Upgrade (Left Room)' },
		'The4ThHouseUpgradeRightRoom': { value: '4th House Upgrade (Right Room)' },
		'The5ThHouseUpgrade2NdFloor': { value: '5th House Upgrade (2nd Floor)' },
	}
});

export default sourceEnum;