import axios from "axios";


const fetchUsers = async () => {
    const response  = await axios.get("<https://jsonplaceholder.typicode.com/users>");
    return response.data;
};

fetchUsers()
.then(users => console.log(users));