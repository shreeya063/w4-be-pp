
let userArray = [];
let nextId = 1;

const getAll = () => {
  return userArray;
};

const addOne = (name, email, password, phone_number,gender,date_of_birth,membership_status) => {
  if (!name || !email || !password || !phone_number || !gender || !date_of_birth || !membership_status ) {
    return false;
  }
  const newUser = {
    id: nextId++,
    name: name,
    email: email,
    password: password,
    phone_number:phone_number,
    gender:gender,
    date_of_birth:date_of_birth,
    membership_status:membership_status,
  };
  userArray.push(newUser);
  return newUser;
};

const findById = (id) => {
  const user = userArray.find((user) => user.id === Number(id));
  if (user) {
    return user;
  } else return false;
};

const updateOneById = (id, updatedData) => {
  const user = findById(id);
  if (user) {
    if (updatedData.name) {
      user.name = updatedData.name;
    }
    if (updatedData.email) {
      user.email = updatedData.email;
    }
    if (updatedData.password) {
      user.password = updatedData.password;
    }
    if (updatedData.phone_number) {
      user.phone_number = updatedData.phone_number;
    }
    if (updatedData.gender) {
      user.gender = updatedData.gender;
    }
    if (updatedData.date_of_birth) {
      user.date_of_birth = updatedData.date_of_birth;
    }
    if (updatedData.membership_status) {
      user.membership_status = updatedData.membership_status;
    }
    return user;
  }
  return false;
};

const deleteOneById = (id) => {
  const user = findById(id);
  if (user) {
    const initialLenght = userArray.length;
    userArray = userArray.filter((user) => user.id !== Number(id));
    return userArray.length < initialLenght;
  } else return false;
};
if (require.main === module) {
  let result = addOne("Paris in 7 Days User", "Paris is synonymous.", "https://www.course-api.com/images/users/user-1.jpeg", 500);
  console.log(result);
  result = addOne("Finland in 7 Days User", "Finland is synonymous.", "https://www.course-api.com/images/users/user-2.jpeg", 800);
  console.log(result);
  console.log("getAll called:", getAll());
  console.log("findById called:", findById(2));
  console.log(
    "updateById called:", updateOneById(2, {
      name: "Italy in 7 Days User",
      info: "Paris is synonymous.",
      image: "https://www.course-api.com/images/users/user-2.jpeg",
      price: 800
    })
  );
  console.log("findById called after item updated:", findById(2));
  console.log("deleteById called:", deleteOneById(2));
  console.log("findById called after item deleted:", findById(2));
}

const User= {
  getAll,
  addOne,
  findById,
  updateOneById,
  deleteOneById,
};

module.exports = User;