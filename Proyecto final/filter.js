
export function filterStays(stays, city, guests) {
  return stays.filter(stay => {
    const cityMatch = !city || stay.city === city;
    const guestsMatch = !guests || stay.maxGuests >= guests;
    return cityMatch && guestsMatch;
  });
}
