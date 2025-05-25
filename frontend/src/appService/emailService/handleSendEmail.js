import formatEmailMessage from '../../extensions/formatEmailMessage';
import { CONTACT_ENDPOINT } from '../../config/apiConfig';

const handleSendEmail = async (firstName, lastName, email, formEntries) => {
  const name = `${firstName} ${lastName}`;
  const message = formatEmailMessage(formEntries);

  try {
    const res = await fetch(CONTACT_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message })
    });

    const result = await res.json();
    if (!res.ok) throw new Error(result.error);
    return { success: true, message: result.message };
  } catch (err) {
    return { success: false, error: err.message };
  }
};

export default handleSendEmail;