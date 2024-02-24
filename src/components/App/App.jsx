import './App.css';
import { ContactList } from '../ContactList/contactlist';
import { ContactForm } from '../ContactForm/contactform';
import { SearchBox } from '../SearchBox/searchbox';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
