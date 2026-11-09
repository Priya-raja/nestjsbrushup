import { Injectable, NotFoundException} from '@nestjs/common';

@Injectable()
export class HotelsService {
    private readonly hotels = [
    { id: 1, name: 'Atlantis The Palm', city: 'Dubai', price: 1200 },
    { id: 2, name: 'Jumeirah Beach Hotel', city: 'Dubai', price: 950 },
    { id: 3, name: 'Address Downtown', city: 'Dubai', price: 800 },
  ];
  findAll() {
    return this.hotels;
  }

  findOne(id: number) {
    const hotel = this.hotels.find((hotel) => hotel.id === id);

    if (!hotel) {
      throw new NotFoundException(`Hotel ${id} not found`);
    }

    return hotel;
  }

  getHotelsByCity(city: string) {
  const normalizedCity = city.trim().toLowerCase();

  return this.hotels.filter(
    (hotel) => hotel.city.toLowerCase() === normalizedCity,
  );
}
}

