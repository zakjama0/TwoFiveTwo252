import React, { useState } from "react";
import './App.css';
function DonateModal({ visible, onClose, onDonate }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState("");

  if (!visible) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !amount) {
      alert("Please fill in all fields");
      return;
    }
    onDonate({ name, email, amount });
    setName("");
    setEmail("");
    setAmount("");
  };

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Close donation form">
          &times;
        </button>
        <h2>Donate Now</h2>
        <form onSubmit={handleSubmit} className="donate-form">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus
          />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="number"
            placeholder="Donation Amount (£)"
            min="1"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
          <button type="submit" className="button donate-button">
            Confirm Donation
          </button>
        </form>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");
  const [donateModalVisible, setDonateModalVisible] = useState(false);
  const [thankYou, setThankYou] = useState(null);

  const handleDonateClick = () => {
    setThankYou(null);
    setDonateModalVisible(true);
  };

  const handleDonateSubmit = ({ name, email, amount }) => {
    setDonateModalVisible(false);
    setThankYou(`Thank you, ${name}, for donating £${amount}! We will contact you at ${email}.`);
  };

  return (
    <>
      <nav>
        <h1>TwoFiveTwo</h1>
        <div className="nav-buttons">
          <button
            className={page === "home" ? "active" : ""}
            onClick={() => setPage("home")}
          >
            Fighting poverty
          </button>
          <button
            className={page === "about" ? "active" : ""}
            onClick={() => setPage("about")}
          >
            Get involved
          </button>
          <a href="https://buy.stripe.com/test_5kQ7sDcr66azgQ435w3VC00" target="_blank" rel="noopener noreferrer">
            <button className="donate">Donate Now</button>
          </a>
        </div>
      </nav>

      {page === "home" && (
        <>
          <section className="hero">
            <div className="hero-content">
              <h2>SOMALILAND DROUGHT APPEAL</h2>
              <p>Your donation could bring life-saving aid to families affected by the ongoing drought in Somaliland.</p>
              <button className="button donate-button" onClick={handleDonateClick}>
                DONATE NOW
              </button>
            </div>
          </section>

          <section className="card-grid">
            <div className="card">
              <img
                src="https://africanarguments.org/wp-content/uploads/2024/02/Somaliland-drought-egal-family.jpg"
                alt="Somaliland drought update"
              />
              <h3>Somaliland drought update</h3>
              <button className="button">READ MORE</button>
            </div>
            <div className="card">
              <img
                src="https://www.somaliland.com/wp-content/uploads/2020/03/maxresdefault.jpg"
                alt="Emergency relief initiatives"
              />
              <h3>Emergency relief initiatives</h3>
              <button className="button">LEARN MORE</button>
            </div>
            <div className="card">
              <img
                src="https://d1jyxxz9imt9yb.cloudfront.net/medialib/2763/image/s768x1300/DRRR202203_DroughtResponse_005_359287.jpg"
                alt="Food insecurity crisis in the Horn of Africa"
              />
              <h3>Food insecurity crisis in the Horn of Africa</h3>
              <button className="button">WATCH THE VIDEO</button>
            </div>
            <div className="card">
              <h3>DONATE NOW</h3>
              <button className="button donate-button" onClick={handleDonateClick}>
                DONATE
              </button>
              {thankYou && <p style={{ marginTop: "1rem", color: "green", fontWeight: "600" }}>{thankYou}</p>}
            </div>
          </section>
        </>
      )}

      {page === "about" && (
        <section style={{ padding: "4rem 1rem", maxWidth: "700px", margin: "auto" }}>
          <div style={{ background: "white", borderRadius: "2rem", boxShadow: "0 2px 10px rgba(0,0,0,0.1)", padding: "3rem" }}>
            <h2 style={{ color: "#f37021", fontWeight: "bold", marginBottom: "1rem" }}>
              About TwoFiveTwo
            </h2>
            <p style={{ color: "#444", fontSize: "1.1rem", lineHeight: "1.6" }}>
              TwoFiveTwo is a grassroots charity supporting the people of Somaliland. With micro-donations as small as £2.52, we bring food, water, and healthcare to communities facing urgent crises.
              Together, we can make lasting change. Join our mission to empower, uplift, and provide hope to those in need.
            </p>
          </div>
        </section>
      )}

      <footer>
        &copy; {new Date().getFullYear()} <strong>TwoFiveTwo</strong>. All rights reserved.
      </footer>

      <DonateModal
        visible={donateModalVisible}
        onClose={() => setDonateModalVisible(false)}
        onDonate={handleDonateSubmit}
      />
    </>
  );
}
