import { Text, View, TextInput, Button, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useCreateMovie } from "../../mutation/useCreateMutation";

export default function AddMovie() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      title: '',
      picture: '',
      category: '',
      year: ''
    }
  });
  const { createMovie, loading, error, data }  = useCreateMovie();
  const onSubmit = (data: any) => {
    console.log(data)
    createMovie({
    'variables': {
      category: data.category,
      title: data.title,
      year:  Number(data.year)
    }
       
    })
  };

  return (
    <View>
      <Text style={styles.text}> TITLE </Text>
      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="title"
      />

    <Text style={styles.text}> year </Text>
      <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="year"
      />

    <Text style={styles.text}> Category </Text>
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="category"
      />
      {errors.category && <Text>This is required.</Text>}

    <Text style={styles.text}> PICTURE </Text>
    <Controller
        control={control}
        rules={{
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="picture"
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    height: 50,
    backgroundColor: 'white',
  },
  text: {
    color: 'white'
  }
})