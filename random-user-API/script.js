const randomUser = async () => {
  const res = await fetch("https://randomuser.me/api/");

  const data = await res.json();
};

randomUser();
