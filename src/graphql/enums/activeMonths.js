
import { GraphQLEnumType } from 'graphql';

import Thern from '../enums/thern';

const activeMonthsEnum = new GraphQLEnumType({
	name: 'activeMonthsEnum',
	values: {
		'northern': { value: [Thern] },
		'southern': { value: [Thern] },
	}
});

export default activeMonthsEnum;