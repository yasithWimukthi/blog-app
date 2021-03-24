import React from 'react';

const BlogContext = React.createContext();

export const BlogProvider = ({children}) => {

    const blogPosts = [
        {title:"Blog post 1"},
        {title:"Blog post 2"},
        {title:"Blog post 3"}
    ];

    return (
        <BlogContext.Provider blogPosts={5}>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext;
