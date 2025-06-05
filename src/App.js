import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      <nav>
        <h1>TwoFiveTwo</h1>
        <div className="nav-buttons">
          <button className={page === "home" ? "active" : ""} onClick={() => setPage("home")}>
            Fighting poverty
          </button>
          <button className={page === "about" ? "active" : ""} onClick={() => setPage("about")}>
            Get involved
          </button>
        </div>
      </nav>

      {page === "home" && (
        <>
          <section className="hero">
            <div className="hero-content">
              <h2>SOMALILAND DROUGHT APPEAL</h2>
              <p>Your donation could bring life-saving aid to families affected by the ongoing drought in Somaliland.</p>
              <div className="donation-options">
                <a href="https://buy.stripe.com/eVq14m7Uy1wRbCkdmlejK01" target="_blank" rel="noopener noreferrer">
                  <button className="button donate-button">£10</button>
                </a>
                <a href="https://buy.stripe.com/9B6fZg5Mq5N7cGo965ejK02" target="_blank" rel="noopener noreferrer">
                  <button className="button donate-button">£20</button>
                </a>
              </div>
            </div>
          </section>

          <section className="card-grid">
            <div className="card">
              <img
                src="https://africanarguments.org/wp-content/uploads/2024/02/Somaliland-drought-egal-family.jpg"
                alt="Somaliland drought update"
              />
              <h3>Somaliland drought update</h3>
              <button className="button" onClick={() => setPage("droughtUpdate")}>READ MORE</button>
            </div>
            <div className="card">
              <img
                src="https://www.somaliland.com/wp-content/uploads/2020/03/maxresdefault.jpg"
                alt="Emergency relief initiatives"
              />
              <h3>Emergency relief initiatives</h3>
              <button className="button" onClick={() => setPage("emergencyInitiatives")}>LEARN MORE</button>
            </div>
            <div className="card">
              <img
                src="https://d1jyxxz9imt9yb.cloudfront.net/medialib/2763/image/s768x1300/DRRR202203_DroughtResponse_005_359287.jpg"
                alt="Food insecurity crisis in the Horn of Africa"
              />
              <h3>Food insecurity crisis in the Horn of Africa</h3>
              <a href='https://www.youtube.com/watch?v=7Oz_eL5z2mc' target="_blank" rel="noopener noreferrer">
                  <button className="button" >WATCH THE VIDEO</button>
            
                </a>
              </div>
            <div className="card">
              <h3>Support Us</h3>
              <div className="donation-options">
                <a href="https://buy.stripe.com/test_5kA6qu5rD9Ej6I4bIJ" target="_blank" rel="noopener noreferrer">
                  <button className="button donate-button">£10</button>
                </a>
                <a href="https://buy.stripe.com/test_fZecPI6cf0frgL6aEG" target="_blank" rel="noopener noreferrer">
                  <button className="button donate-button">£20</button>
                </a>
              </div>
            </div>
          </section>
        </>
      )}

      {page === "about" && (
        <section style={{ padding: "4rem 1rem", maxWidth: "700px", margin: "auto" }}>
          <div
            style={{
              background: "white",
              borderRadius: "2rem",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
              padding: "3rem",
            }}
          >
            <h2 style={{ color: "#26a138", fontWeight: "bold", marginBottom: "1rem" }}>About TwoFiveTwo</h2>
            <p style={{ color: "#444", fontSize: "1.1rem", lineHeight: "1.6" }}>
              TwoFiveTwo is a grassroots initiative collected by an individual aiming to
              deliver urgent support to communities in Somaliland. Through small
              donations, we provide food, water, and healthcare to families
              suffering from the effects of drought and poverty.
              Together, we can make lasting change. Join our mission to empower, uplift, and provide hope to those in need.
            </p>
          </div>
        </section>
      )}

      {page === "droughtUpdate" && (
        <section style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
          <button className='button'onClick={() => setPage("home")}>← Back to Home</button>
          <h2>Somaliland Drought Update</h2>
          <p>
            Somaliland continues to face one of the worst droughts in decades, severely affecting millions of people and livestock.
            The drought has led to a critical shortage of water and food, forcing families to migrate in search of resources.
          </p>
          <p>
            Recent UN reports highlight that over 60% of Somaliland's population is food insecure, and malnutrition rates, especially among children, have soared.
            Emergency water trucking and food distributions are ongoing, but funding gaps remain a significant challenge.
          </p>
          <p>
            TwoFiveTwo is committed to supporting local communities by providing clean water access points, emergency food supplies, and healthcare services.
            Your donations directly fund these life-saving interventions.
          </p>
          <img
            src="https://africanarguments.org/wp-content/uploads/2024/02/Somaliland-drought-egal-family.jpg"
            alt="Somaliland drought"
            style={{ width: "100%", borderRadius: "1rem", marginTop: "1rem" }}
          />
        </section>
      )}

      {page === "emergencyInitiatives" && (
        <section style={{ padding: "2rem", maxWidth: "700px", margin: "auto" }}>
          <button className='button'onClick={() => setPage("home")}>← Back to Home</button>
          <h2>Emergency Relief Initiatives</h2>
          <p>
            In response to the ongoing drought crisis, TwoFiveTwo has launched multiple emergency relief initiatives focused on:
          </p>
          <ul>
            <li><strong>Water provision:</strong> Installation of water tanks and boreholes, plus water trucking to remote communities.</li>
            <li><strong>Food aid:</strong> Distribution of emergency food rations to vulnerable families, especially children and pregnant women.</li>
            <li><strong>Healthcare access:</strong> Mobile clinics providing basic healthcare and nutritional support to drought-affected populations.</li>
            <li><strong>Livelihood support:</strong> Providing fodder and veterinary care for livestock to help pastoralist communities sustain their herds.</li>
          </ul>
          <p>
            These initiatives rely heavily on community partnerships and donor generosity to reach the most affected areas.
            By contributing, you help sustain hope and survival for thousands enduring this humanitarian emergency.
          </p>
          <img
            src="https://www.somaliland.com/wp-content/uploads/2020/03/maxresdefault.jpg"
            alt="Emergency relief in Somaliland"
            style={{ width: "100%", borderRadius: "1rem", marginTop: "1rem" }}
          />
        </section>
      )}

      <footer>
        <strong>TwoFiveTwo</strong> {new Date().getFullYear()}
      </footer>
    </>
  );
}
