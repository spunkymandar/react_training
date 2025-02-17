import { useState } from 'react';
function App3() {
  const [error, setError] = useState(null);
  async function storeTodoAction(formData) {
    const todoTitle = formData.get('title');
    if (!todoTitle || todoTitle.trim() === '') {
      setError('Title is required.'); // state update BEFORE delay
    }
    // 3s delay to simulate a slow process
    await new Promise((resolve) => setTimeout(resolve, 3000)); 
    if(error==='Title is required.')
    console.log('no data to submit');
    else
    console.log('data is submitted')
  }
  return (
    <>
      <form action={storeTodoAction}>
        <p>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" />
        </p>
        {error && <p className="errors">{error}</p>}
        <p className="actions">
          <button>Store Todo</button>
        </p>
      </form>
    </>
  );
}
export default App3