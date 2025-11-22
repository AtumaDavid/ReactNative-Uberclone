import { LocationStore } from '@/types/type';
import { create } from 'zustand';

export const useLocationStore = create<LocationStore>((set) => ({
  userAddress: null,
  userLongitude: null,
  userLatitude: null,
  destinationLongitude: null,
  destinationLatitude: null,
  destinationAddress: null,
  setUserLocation: ({
    address,
    latitude,
    longitude,
  }: {
    address: string;
    latitude: number;
    longitude: number;
  }) =>
    set(() => ({
      userAddress: address,
      userLatitude: latitude,
      userLongitude: longitude,
    })),
  setDestinationLocation: ({
    address,
    latitude,
    longitude,
  }: {
    address: string;
    latitude: number;
    longitude: number;
  }) =>
    set(() => ({
      destinationAddress: address,
      destinationLatitude: latitude,
      destinationLongitude: longitude,
    })),
}));
