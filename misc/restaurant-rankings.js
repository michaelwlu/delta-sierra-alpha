const restaurantRankings = (friendRankings) => {
	const rankings = Array(friendRankings[0].length).fill(null);
	for (let i = 0; i < friendRankings.length; i++) {
		const currFriendRankings = friendRankings[i];

		for (let j = 0; j < currFriendRankings.length; j++) {
			const currRestaurantNum = currFriendRankings[j] - 1;
			// j is rank (lower is better), currRestaurantNum is the restaurant num converted to zero index

			if (rankings[currRestaurantNum] === null) {
				rankings[currRestaurantNum] = 0;
			}

			rankings[currRestaurantNum] += j;
		}
	}

	let topRankedRestaurant;
	let topRanking = Infinity;

	for (let i = 0; i < rankings.length; i++) {
		if (rankings[i] < topRanking) {
			// find top ranking (lower is better) and top ranked restaurant num (still in zero index)
			topRankedRestaurant = i;
			topRanking = rankings[i];
		}
	}

	let topRankingAppearances = 0;

	// check to see that top ranking is unique
	for (let i = 0; i < rankings.length; i++) {
		if (rankings[i] === topRanking) {
			topRankingAppearances++;
		}
	}

	// convert restaurant num back to one index
	return topRankingAppearances === 1 ? topRankedRestaurant + 1 : -1;
};

const p1 = [
	[1, 2, 3, 4],
	[3, 1, 4, 2],
	[4, 2, 1, 3],
];

const p2 = [
	[1, 2, 3],
	[2, 3, 1],
	[3, 1, 2],
];

console.log(restaurantRankings(p1));
// console.log(restaurantRankings(p2));
