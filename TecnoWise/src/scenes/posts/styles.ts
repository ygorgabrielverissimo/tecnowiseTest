import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../../themes';

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background: #edf0f0;
`;

export const ContentNavigation = styled.View`
  display: flex;
  flex-direction: row;
  padding: 8px 16px;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;
export const RouteBotton = styled.TouchableOpacity`
  display: flex;
  margin-right: -3px;
`;

export const Caracter = styled.Text`
  color: ${theme.colors.primary};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.5px;
  margin-left: -3px;
`;

export const TextNavigation = styled.Text`
  color: ${theme.colors.secondary};
  font-family: Roboto;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.5px;
`;

export const Content = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  flex: 1;
  align-self: stretch;
`;
export const ResultNumber = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 12px;
`;

export const Icons = styled.View`
  flex-direction: row;
  justify-content: space-around;
  weight: 30px;
  padding: 0px 20px;
  margin-bottom: 6px;
`;

export const Opacity = styled.TouchableOpacity`
  flex: 1
`;

export const NamberText = styled.Text`
  width: 72%;
  color: ${theme.colors.primary};
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
`;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textTitle: {
    fontSize: 20,
    marginTop: 120,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    width: 150,
    backgroundColor: '#4EB151',
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 3,
    margin: 10,
  },
  buttonTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  listContainer: {
    flex: 1,
    padding: 25,
  },
  listTitle: {
    fontSize: 16,
    marginBottom: 20,
    color: '#666',
  },
  listButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  listIcon: {
    fontSize: 26,
    color: '#666',
    width: 60,
  },
  listLabel: {
    fontSize: 16,
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    marginBottom: 20,
  },
  gridButtonContainer: {
    flexBasis: '25%',
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridIcon: {
    fontSize: 30,
    color: 'white',
  },
  gridLabel: {
    fontSize: 14,
    paddingTop: 10,
    color: '#333',
  },
  dateHeaderContainer: {
    height: 45,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateHeaderButton: {
    height: '100%',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateHeaderButtonCancel: {
    fontSize: 18,
    color: '#666',
    fontWeight: '400',
  },
  dateHeaderButtonDone: {
    fontSize: 18,
    color: '#006BFF',
    fontWeight: '500',
  },
  inputContainer: {
    borderTopWidth: 1.5,
    borderTopColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  inputIcon: {
    fontSize: 24,
    color: '#666',
    marginHorizontal: 5,
  },
  inputIconSend: {
    color: '#006BFF',
  },
  input: {
    flex: 1,
    height: 36,
    borderRadius: 36,
    paddingHorizontal: 10,
    backgroundColor: '#f1f1f1',
    marginHorizontal: 10,
  },
  messageContainer: {
    flex: 1,
    padding: 25,
  },
  messageTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  message: {
    fontSize: 17,
    lineHeight: 24,
    marginVertical: 20,
  },
  messageButtonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  messageButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#3385ff',
    marginLeft: 10,
  },
  messageButtonText: {
    color: '#3385ff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  messageButtonRight: {
    backgroundColor: '#3385ff',
  },
  messageButtonTextRight: {
    color: '#fff',
  },
});
