import { useSelector } from 'react-redux';
import './App.css';
import { ContactList } from '../ContactList/contactlist';
import { ContactForm } from '../ContactForm/contactform';

// import { useEffect, useState } from 'react';
// import { SearchBox } from '../SearchBox/searchbox';
// import { ContactForm } from '../ContactForm/contactform';

// const users = [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];

// const getSevedUsers = () => {
//   const savedUsers = window.localStorage.getItem('saved-users');
//   if (JSON.parse(savedUsers) !== null) {
//     return JSON.parse(savedUsers);
//   }
//   return users;
// };

export const App = () => {
  // const [inputValue, setInputValue] = useState('');
  // const [filterUsers, setFilterUsers] = useState(getSevedUsers);

  // useEffect(() => {
  //   window.localStorage.setItem('saved-users', JSON.stringify(visibleUsers));
  // });

  // const visibleUsers = filterUsers.filter(filterUser =>
  //   filterUser.name.toLowerCase().includes(inputValue.toLowerCase())
  // );

  // const addUser = newUser => {
  //   setFilterUsers(allUsers => {
  //     return [
  //       ...allUsers,
  //       {
  //         id: Date.now().toString(),
  //         ...newUser,
  //       },
  //     ];
  //   });
  // };

  // const deletUser = id => {
  //   setFilterUsers(allUsers => {
  //     return allUsers.filter(user => user.id !== id);
  //   });
  // };

  // const contacts = useSelector(state => state);

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      {/* <SearchBox inputValue={inputValue} setInputValue={setInputValue} /> */}
      <ContactList />
    </div>
  );
};
