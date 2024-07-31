import { useState } from 'react';
import { TextInput } from 'react-native';

const TitleInput = ({ style }) => {
  const [title, setTitle] = useState('');

  return (
    <TextInput
      editable
      multiline
      onChangeText={text => setTitle(text)}
      value={title}
      placeholder='Otsikko'
      style={style}
    />
  );
};

export default TitleInput;