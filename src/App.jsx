// import { ContactForm } from './components/contactform/contactform';
// import { SearchBox } from './components/searchbox/searchbox';
import { ContactList } from './components/contactlist/contactlist';
import './App.css';

export const App = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      {/* <ContactForm /> */}
      {/* <SearchBox /> */}
      <ContactList />
    </div>
  );
};
