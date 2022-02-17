import { Platform, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../../constants/theme';

const styles = StyleSheet.create({
  header: {
    backgroundColor: COLORS.primary,
    alignItems: 'center',
    paddingBottom: 15,
    zIndex: 400,
    elevation: 400,
  },
  appName: {
    color: COLORS.white,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    fontWeight: 'bold',
    fontSize: SIZES.h2,
  },
  noData: {
    marginTop: 100,
    alignItems: 'center',
  },
  noDataTxt: {
    color: COLORS.accent,
    fontSize: SIZES.h2,
    fontWeight: 'bold',
  },
});

export default styles;
