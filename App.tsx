import React, {useEffect, useState} from 'react';
import {Button, TextInput, View, Text} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const url = 'http://192.168.2.203:3000/users';
    let result = await fetch(url);
    result = await result.json();
    if (result) {
      setData(result);
    }
    
  };

  const deleteData = async (id) => {
    const url = 'http://192.168.2.203:3000/users';
    const result = await fetch(`${url}/${id}`, {
      method: 'Delete',
      headers: {'Content-Type': 'Application/json'},
    });
    fetchData()
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: 'orange',
          margin: 5,
          padding: 8,
          height: '6%',
        }}>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: '900'}}>name</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontWeight: '900'}}>age</Text>
        </View>
        <View style={{flex: 1.3}}>
          <Text style={{fontWeight: '900'}}>operation</Text>
        </View>
      </View>
      {data.length
        ? data.map(item => (
            <View
              key={item.id}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: 'orange',
                margin: 5,
                padding: 8,
              }}>
              <View style={{flex: 1}}>
                <Text>{item.name}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text>{item.age}</Text>
              </View>
              <View style={{flexDirection: 'row', gap: 8}}>
                <View>
                  <Button title="Update" />
                </View>
                <View>
                  <Button title="Delete" onPress={()=>{deleteData(item.id)}}/>
                </View>
              </View>
            </View>
          ))
        : null}
    </View>
  );
};

export default App;
