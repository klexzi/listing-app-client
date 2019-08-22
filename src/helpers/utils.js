export const checkLoginStatus = () => {
  const token = localStorage.getItem("token");
  return !!token;
};

export const extractCategories = categories => {
  const categoryNames = [];
  categories.forEach(category => {
    categoryNames.push(category.title);
  });

  return categoryNames.join(", ");
};
