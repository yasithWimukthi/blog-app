import React,{useContext} from 'react';
import {Text,View,StyleSheet,FlatList,Button} from 'react-native';
import BlogContext from "../context/BlogContext";

const IndexScreen = () => {

    const {data,addBlogPost} = useContext(BlogContext);

    return (
        <View>
            <Text>Index screen</Text>
            <Button title="Add Blog Post" onPress={addBlogPost}/>
            {/*<Text>{blogPosts}</Text>*/}
            <FlatList
                data={data}
                keyExtractor = {blogPost => blogPost.title}
                renderItem = {({item}) => {
                   return <Text>{item.title}</Text>
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen;
