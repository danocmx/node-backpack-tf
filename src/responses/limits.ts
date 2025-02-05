export type LimitsResponse = {
  listings: {
    promotionSlotsAvailable: number;
    total: number;
    used: number;
    suggestionBonus: number;
    baseline: number;
    donationBonus: number;
    giftedPremiumMonthsBonus: number;
    multiplier: number;
    twitterFollowerBonus: number;
    acceptedSuggestionBonus: number;
    mvpDonationBonus: number;
  }
}
