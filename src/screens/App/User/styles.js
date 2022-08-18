import {StyleSheet,Platform} from 'react-native';
import Colors from '../../../constants/Colors';

const styles = StyleSheet.create({
  conatainer:
    {flex: 1,marginTop:Platform.OS === 'ios' ? 0 : 15},
  
  imageView: {
    width: 375,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  authorsView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  authorsName: {
    textAlign: 'left',
    fontSize: 14,
    fontWeight: '600',
  },
  authorText: {fontSize: 12},
  gridStyle: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
    backgroundColor: Colors.WHITE_COLOR,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    borderWidth: 1,
    borderColor: 'lightgrey',
    elevation: 5,
    borderRadius: 10,
  },
  mainTilte: {
    color: Colors.BLACK_COLOR,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
  mainTilte2: {
    color: Colors.BLACK_COLOR,
    fontWeight: '700',
    textAlign: 'center',
    fontSize: 15,
    marginTop: 10,
  },
  description: {
    color: Colors.BLACK_COLOR,
    fontWeight: '500',
    textAlign: 'center',
    fontSize: 12,
    marginVertical: 10,
    padding: 8,
  },
});

export default styles;
