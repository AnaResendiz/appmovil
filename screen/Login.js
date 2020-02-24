import React, { Component } from 'react';
import {Container, Content, Card, CardItem, Text, Body, Button, Input, Item, Icon, Header} from 'native-base';
import {StyleSheet, ScrollView} from 'react-native'

class Login extends Component {
  render(){
    const navegar = this.props.navigation;
  return (
    <> 
      <Container>
        <Header />
        <ScrollView>
        <Content padder 
                  contentContainerStyle = {misEstilos.Content}>
          <Card style = {misEstilos.textCenter} transparent>
            <CardItem>
              <Body>
                <Text style = {misEstilos.textCenter}>
                  Crea tu sesión.
                </Text> 
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem footer bordered>
              <Button 
              primary 
              onPress={() =>  {
                navegar.navigate('Registro', {
                titulo: 'Registro usuario'
              }); 
          }}> 
          <Text> Entrar </Text>
              </Button>
              <Button style = {misEstilos.boton}>
                <Text> Iniciar </Text>
                </Button> 
            </CardItem>
          </Card>
        </Content>
        </ScrollView>
      </Container>
    </>
  );
};
}

const misEstilos = StyleSheet.create({
  Content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  boton:{ 
    
    marginLeft: '70%',
  },
  body:{
    paddingVertical: 35,
  },
  Boton2:{
    marginRight:'30%',
  },
  Boton3:{
    marginLeft:'30%',
  },

});

export default Login;
