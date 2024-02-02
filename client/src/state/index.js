import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // Theme Light Dark Mode State
    mode: "light",
    theme: "default",

    // User State
    user: null,
    token: null,

    // Recipes State
    recipes: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // Login
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.loggedInUser = action.payload.user;
            state.loggedInUser.friends = action.payload.user.friends;
            state.token = action.payload.token;
            // console.log("STATE LOG IN USER:", state.loggedInUser);
            // console.log("STATE LOGGED IN FRIENDS:", state.loggedInUser.friends);
        },

        // Logout
        setLogout: (state) => {
            state.user = null;
            state.token = null;
            state.recipes = [];
        },
        // Dark & Light Mode
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light";
        },

        // Themes
        setThemeDefault: (state, action) => {
            state.theme = action.payload.theme.default;
        },
        setThemeDessert: (state, action) => {
            state.theme = action.payload.theme.dessert;
        },
        setThemeDinner: (state, action) => {
            state.theme = action.payload.theme.dinner;
        },

        // Get User Friends
        setFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.error("user friends non-existent :(");
            }
        },

        // Get User Friends
        setLoggedInFriends: (state, action) => {
            if (state.user) {
                state.user.friends = action.payload.friends;
            } else {
                console.error("user friends non-existent :(");
            }
        },

        // Get User Recipes
        // Get All Recipes
        setAllRecipes: (state, action) => {
            state.recipes = action.payload.recipes;
        },

        // Get User Recipes
        setRecipe: (state, action) => {
            const updatedRecipes = state.recipes.map((recipe) => {
                if (recipe._id === action.payload.recipe._id) {
                    return action.payload.recipe;
                }
                return recipe;
            });
            state.recipes = updatedRecipes;
        },

        // // Get User Posts
        // setPosts: (state, action) => {
        //     state.posts = action.payload.posts;
        // },
        // setPost: (state, action) => {
        //     const updatedPosts = state.recipes.map((post) => {
        //         if (post._id === action.payload.post._id)
        //             return action.payload.post;
        //         return post;
        //     });
        //     state.posts = updatedPosts;
        // },
    },
});

export const {
    setMode,
    setThemeDefault,
    setThemeDessert,
    setThemeDinner,
    setLogin,
    setLogout,
    setFriends,
    setAllRecipes,
    setRecipe,
    // setPosts,
    // setPost,
} = authSlice.actions;
export default authSlice.reducer;
