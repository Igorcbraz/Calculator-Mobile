import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Buttons } from './src/Components/Buttons';
import { Display } from './src/Components/Display';

export default function app(){
  const [result, setResult] = useState('');

  function setExpression(value){
      setResult(result + value);
  }

  function calc(){
    setResult(eval(result));
  }

  function reset(){
    setResult('');
  }

  return(
    <View style={styles.container}>
      <Display value={result} isHistory/>
      <Display value={result}/>

      <View style={styles.buttonsContainer}>
        <Buttons label='AC'triple action={reset} />
        <Buttons label='/' action={() => setExpression('/')} operation/>
        <Buttons label='7' action={() => setExpression('7')} />
        <Buttons label='8' action={() => setExpression('8')} />
        <Buttons label='9' action={() => setExpression('9')} />
        <Buttons label='*' action={() => setExpression('*')} operation/>
        <Buttons label='4' action={() => setExpression('4')} />
        <Buttons label='5' action={() => setExpression('5')} />
        <Buttons label='6' action={() => setExpression('6')} />
        <Buttons label='-' action={() => setExpression('-')} operation/>
        <Buttons label='1' action={() => setExpression('1')} />
        <Buttons label='2' action={() => setExpression('2')} />
        <Buttons label='3' action={() => setExpression('3')} />
        <Buttons label='+' action={() => setExpression('+')} operation/>
        <Buttons label='0' action={() => setExpression('0')}   double/>
        <Buttons label='.' action={() => setExpression('.')}/>
        <Buttons label='=' action={calc} operation/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282a32',
  },
  buttonsContainer:{
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 30,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: '#1f1f1f',
  }
});