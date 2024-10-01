export const getHeightMiniProfile = (height) => {
  if (height < 100) {
    return {
      height: `calc(${height}% - 67px)`,
      borderTopRightRadius: "18px",
      borderTopLeftRadius: "18px",
    };
  } else {
    return {
      height: `calc(${height}% - 67px)`,
    };
  }
};
