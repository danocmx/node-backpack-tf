import { MyListingsResponse } from '../types/my-listings';

export default function (data: any): MyListingsResponse {
	return data as MyListingsResponse;
}
