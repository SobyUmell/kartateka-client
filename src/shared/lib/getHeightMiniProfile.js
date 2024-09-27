export const getHeightMiniProfile = (height) => {
  if (height < 100) {
    return {
      height: `${height}%`,
      borderTopRightRadius: "18px",
      borderTopLeftRadius: "18px",
    };
  } else {
    return {
      height: `${height}%`,
    };
  }
};
