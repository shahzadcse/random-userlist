function UserPic({ picture, name }) {
  console.log(name);
  return <img src={picture} alt={name.first} />;
}

export default UserPic;
