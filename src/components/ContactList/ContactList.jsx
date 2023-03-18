import propTypes from 'prop-types';

import css from './ContactList.module.css';

export const ContactList = ({ contacts, handleDelete }) => (
  <div className={css.list}>
    <ul>
      {contacts.map((contact, id) => (
        <li className={css.item} key={id}>
          {contact.name}: {contact.number}
          <button
            className={css.button}
            type="button"
            onClick={() => handleDelete(contact.id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  </div>
);

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
