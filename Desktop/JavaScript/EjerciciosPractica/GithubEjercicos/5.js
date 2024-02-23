function likes(likes) {
    switch (true) {
      case (likes<1000):
        return likes.toString();
      case (likes >= 1000 && likes<1000000):
        return (Math.floor(likes/1000)+"K");
      case (likes >= 1000000):
        return (Math.floor(likes/1000000)+"M");
      default:
        return "Likes no válidos";
    }
  }
  console.log(likes(983));      // "983"
  console.log(likes(1900));     // "1K"
  console.log(likes(54000));    // "54K"
  console.log(likes(120800));   // "120K"
  console.log(likes(25222444)); // "25M"
  console.log(likes(500));      // "500"