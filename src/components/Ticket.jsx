import React from "react";
import "../styles/Ticket.css";

const Ticket = () => {
  return (
    <div className="ticket-container">
      <div className="ticket-header">
      <img
             src="/images/image.png"
            alt="MAKE MY SHOW"
            className="logo"
          />
        <div className="ticket-details">
          <h2>Movie(U/A)</h2>
          <p>Telugu, 2D</p>
          <p>Sun, 20 Nov | 10:00 AM</p>
          <p>PVR: Dynamix. </p>
        </div>
      </div>

      <div className="ticket-body">
        <div className="qr-section">
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=WPSC42Q"
            alt="QR Code"
            className="qr-code"
          />
        </div>
        <div className="booking-info">
          <p>1 Ticket(s)</p>
          <h3>AUDI 2</h3>
          <p>CLASSIC - A19</p>
          <p>BOOKING ID: WPSC42Q</p>
        </div>
      </div>

      <div className="ticket-footer">
        <p>A confirmation is sent on e-mail/SMS/WhatsApp within 15 minutes of booking.</p>
        <div className="ticket-actions">
          <button>Cancel booking</button>
          <button>Contact support</button>
        </div>
        <div className="ticket-price">Total Amount: ₹191.06</div>
      </div>
    </div>
  );
};

export default Ticket;
