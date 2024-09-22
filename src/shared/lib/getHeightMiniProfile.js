export const getHeightMiniProfile = (height) => {
  switch (height) {
    case 0.5:
      return {
        height: "50%",
        borderTopRightRadius: "18px",
        borderTopLeftRadius: "18px",
      };

    case 0.75:
      return {
        height: "75%",
        borderTopRightRadius: "18px",
        borderTopLeftRadius: "18px",
      };

    case 1:
      return {
        height: "100%",
      };
    default:
      return {
        height: "100%",
      };
  }
};
