import { useState } from "react"

export default function Subscribe() {
  const [email, setEmail] = useState('');
  function subscribeHandle(e) {
    e.preventDefault();
    console.log(email);
  }
  return <div className="subscribe">
    <div className="h5">Get all the latest posts delivered straight to your inbox.</div>
    <form action="" onSubmit={subscribeHandle}>
      <input type="email" className="form-control" placeholder="Email Address" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <div className="d-grid mt-3">
        <button type="submit" className="btn btn-primary" placeholder="Email Adress">Get Callback</button>
      </div>
    </form>
  </div>
}