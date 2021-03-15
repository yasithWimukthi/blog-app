import React from 'react';

const BlogContext = React.createContext(undefined, undefined);

export const BlogProvider = ({children}) => {
    return (
        <BlogContext.Provider>
            {children}
        </BlogContext.Provider>
    )
}

export default BlogContext;
