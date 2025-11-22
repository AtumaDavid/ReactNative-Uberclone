// import React from 'react';
// import { Text } from 'react-native';
// import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

// export default function Map() {
//   return (
//     <MapView provider={PROVIDER_DEFAULT} className="w-full h-full rounded-2xl">
//       <Text>map</Text>
//     </MapView>
//   );
// }

import { calculateRegion } from '@/lib/map';
import { useLocationStore } from '@/store';
import React from 'react';
import { StyleSheet } from 'react-native';
import MapView, { PROVIDER_DEFAULT } from 'react-native-maps';

export default function Map() {
  const {
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  } = useLocationStore();

  const region = calculateRegion({
    userLatitude,
    userLongitude,
    destinationLatitude,
    destinationLongitude,
  });
  return (
    <MapView
      provider={PROVIDER_DEFAULT}
      className="w-full h-full rounded-2xl"
      style={styles.map}
      tintColor="black"
      // mapType="mutedStandard"
      showsPointsOfInterest={false}
      initialRegion={region}
      showsUserLocation={true}
      userInterfaceStyle="light"
    />
  );
}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: '100%',
    borderRadius: 16,
  },
});
