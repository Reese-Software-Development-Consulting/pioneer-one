
const formatEmailMessage = (entries) => {
    return entries
      .map(entry => `${entry.title}:\n${entry.content}\n`)
      .join('\n');
  };
  
  export default formatEmailMessage;