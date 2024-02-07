// React Components
import { useState, useEffect } from "react";

// Redux & Local State
import { useDispatch, useSelector } from "react-redux";
import { setAllRecipes, setRecipe, setPosts } from "../../state";
import { setFilter } from "../../state/filterReducer";
import { connect } from "react-redux";

// MUI Components
import { Box, Typography, CircularProgress } from "@mui/material";

// Custom Components
import RecipePostWidget from "./RecipePostWidget";

const RecipesFeedWidget = ({
    userId,
    isProfile = false,
    themeColors,
    // user,
}) => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const friends = useSelector((state) => state.user.friends);

    // Theme Destructure
    const {
        primary,
        whiteText,
        headingText,
        textHover,
        textMain,
        recipeText,
        followerIconOutline,
        followerIconBack,
        followerIconBackHover,
        buttonLight,
        buttonLight2,
        buttonLight3,
        buttonHover,
        backgroundPrimary,
        backgroundMain,
        recipeTextPanel,
        mainBackPanel,
        recipeStepsPanel,
        panelMain,
        recipeStepsPanelHover,
        panelMainHover,
    } = themeColors || {};

    // State
    const [user, setUser] = useState(null);
    const [userRecipes, setUserRecipes] = useState(null);

    // Local State
    const recipes = useSelector((state) => state.recipes);
    const filter = useSelector((state) => state.filter);

    // Testing State
    const [userTest, setUserTest] = useState(null);
    const [userRecipesTest, setUserRecipesTest] = useState(null);
    const [recipesTest, setRecipesTest] = useState(null);
    const [allRecipesTest, setAllRecipesTest] = useState(null);

    // Retrieves All Recipe Data -  ✅ Works Correctly
    const getRecipes = async () => {
        const response = await fetch(
            "https://server-vukx.onrender.com/recipes",
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        dispatch(setAllRecipes({ recipes: data }));
    };
    // TESTING  FUNCTION
    // Retrieves All Recipe Data -  ✅ Works Correctly

    // Retrieves User Data for Selected User -  ✅ Works Correctly
    const getUser = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/users/${userId}`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        setUser(data);
    };

    // Retrieves Recipe Data for Selected User -  ✅ Works Correctly
    const getUserRecipes = async () => {
        const response = await fetch(
            `https://server-vukx.onrender.com/recipes/${userId}/recipes`,
            {
                method: "GET",
                headers: { Authorization: `Bearer ${token}` },
            }
        );
        const data = await response.json();
        dispatch(setAllRecipes({ recipes: data }));
    };

    // Renders either All Recipes or select Profile Recipes
    useEffect(() => {
        if (isProfile) {
            getUser();
            getUserRecipes();
        } else {
            getUser();
            getRecipes();
        }
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    // FILTER TESTING
    // console.log("STATE RECIPES:", recipes);

    let filteredRecipes = [];
    const applyFilter = (recipeList, recipeFilter) => {
        filteredRecipes = []; // Reset Filtered List before filter call

        switch (recipeFilter) {
            // Returns Updated Feed with all recipes
            case "all":
                console.log(`FILTER - ${recipeFilter}`);
                filteredRecipes = recipeList;
                console.log("NEW LIST RECIPE:", filteredRecipes);
                return filteredRecipes;

            // Returns updated feed with Main Dishes
            case "main":
                console.log(`FILTER - ${recipeFilter}`);
                recipeList.filter((recipe) => {
                    recipe.recipeType.forEach((rt) => {
                        if (rt === recipeFilter) {
                            console.log("RECIPE TYPE:", recipe.recipeType);
                            filteredRecipes.push(recipe);
                            return filteredRecipes;
                        }
                    });
                });
                console.log("NEW LIST RECIPE:", filteredRecipes);
                return filteredRecipes;

            // Returns updated feed with Appetisers
            case "appetiser":
                console.log(`FILTER - ${recipeFilter}`);
                recipeList.filter((recipe) => {
                    recipe.recipeType.forEach((rt) => {
                        if (rt === recipeFilter) {
                            filteredRecipes.push(recipe);
                            return filteredRecipes;
                        }
                    });
                });
                console.log("NEW LIST RECIPE:", filteredRecipes);
                return filteredRecipes;

            // Returns updated feed with Breakfast Dishes
            case "breakfast":
                console.log(`FILTER - ${recipeFilter}`);
                recipeList.filter((recipe) => {
                    recipe.recipeType.forEach((rt) => {
                        if (rt === recipeFilter) {
                            filteredRecipes.push(recipe);
                            return filteredRecipes;
                        }
                    });
                });
                console.log("NEW LIST RECIPE:", filteredRecipes);
                return filteredRecipes;

            // Returns updated feed with Dessert Dishes
            case "dessert":
                console.log(`FILTER - ${recipeFilter}`);
                recipeList.filter((recipe) => {
                    recipe.recipeType.forEach((rt) => {
                        if (rt === recipeFilter) {
                            filteredRecipes.push(recipe);
                            return filteredRecipes;
                        }
                    });
                });
                console.log("NEW LIST RECIPE:", filteredRecipes);
                return filteredRecipes;

            // Returns updated feed with Drinks & Cocktails
            case "drink":
                console.log(`FILTER - ${recipeFilter}`);
                recipeList.filter((recipe) => {
                    recipe.recipeType.forEach((rt) => {
                        if (rt === recipeFilter) {
                            filteredRecipes.push(recipe);
                            return filteredRecipes;
                        }
                    });
                });
                console.log("NEW LIST RECIPE:", filteredRecipes);
                return filteredRecipes;

            default:
                console.log("NEW LIST RECIPE:", filteredRecipes);
                return filteredRecipes;
        }
    };
    applyFilter(recipes, filter);

    // console.log("RFW - RECIPES", recipes);
    // function setShow(array, column) {

    // const projects = recipes
    //     ? recipes.filter((recipe) => {
    //           //prettier-ignore
    //           //   console.log("RECIPE FILTER CHECK", recipe);
    //           recipe.recipeType.forEach((rt) => {
    //             if (rt === "main") {
    //                 console.log("NEW FILTER CHECK", recipe.recipeType);
    //             }
    //             console.log("FILTERED RECIPES", recipe);
    //               return recipe
    //           });
    //       })
    //     : null;

    // if (found) {
    //     // console.log("FOUND OBJ:", recipe.recipeType);
    //     // found.recipeType = "main";
    // }
    // return array;
    // }

    // console.log("SETSHOW", setShow(recipes, "main"));

    // API Testing
    // console.log("getRecipesTest", recipesTest); // ✅
    // console.log("getUserTest", userTest || "No Data Found"); // ✅
    // console.log("getUserRecipesTest", userRecipesTest); // ✅
    // console.log("RFW - APPLY FILTER:", applyFilter(recipes, filter));

    return (
        <>
            {user ? (
                <Box>
                    {filteredRecipes.map(
                        ({
                            _id,
                            user,
                            userId,
                            firstName,
                            lastName,
                            occupation,
                            userPicturePath,
                            recipeTitle,
                            picturePath,
                            ingredients,
                            equipment,
                            prepTime,
                            cookTime,
                            servings,
                            spiceLevel,
                            steps,
                            notes,
                            tags,
                            likes,
                            recommendations,
                            saves,
                            shares,
                            comments,
                            // getMainRecipes,
                        }) => (
                            <RecipePostWidget
                                key={_id}
                                user={user}
                                recipeId={_id}
                                recipeUserId={userId}
                                name={`${firstName} ${lastName}`}
                                userPicturePath={userPicturePath}
                                occupation={occupation}
                                recipeTitle={recipeTitle}
                                picturePath={picturePath}
                                ingredients={ingredients}
                                equipment={equipment}
                                prepTime={prepTime}
                                cookTime={cookTime}
                                servings={servings}
                                spiceLevel={spiceLevel}
                                steps={steps}
                                notes={notes}
                                tags={tags}
                                likes={likes}
                                recommendations={recommendations}
                                saves={saves}
                                shares={shares}
                                comments={comments}
                                themeColors={themeColors}
                                // getMainRecipes={getMainRecipes}
                            />
                        )
                    )}
                </Box>
            ) : (
                <Box
                    backgroundColor={backgroundMain}
                    borderRadius="0.75rem 0.75rem 0.75rem 0.75rem"
                    p="1.5rem"
                    my="1rem"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <CircularProgress
                        size="4rem"
                        thickness={18}
                        sx={{
                            color: buttonHover,
                        }}
                    />
                </Box>
            )}
        </>
    );
};

export default RecipesFeedWidget;
