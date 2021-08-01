function searchuserName() {
  let result = document.getElementById("search").value.toLowerCase();
  console.log(result);
  let username = ["technoKid997", "heyGurl94", "taebae55", "witchita"];
  let para = document.getElementById("paragraph");
  filteredUserList = username.filter((user) =>
    user.toLowerCase().includes(result)
  );
  filteredUserList.forEach((user) => {
    para.innerText = user;
  });
}
