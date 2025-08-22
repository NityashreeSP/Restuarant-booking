import React, { useState } from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Reservations = () => {
  // Set default date & time to today's values
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const now = new Date().toTimeString().slice(0, 5); // HH:mm

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(today);
  const [time, setTime] = useState(now);
  const [phone, setPhone] = useState('');

  const navigate = useNavigate();

  const handleReservation = async (e) => {
    e.preventDefault();

    // Frontend validation
    if (!firstName || !lastName || !email || !phone || !date || !time) {
      toast.error('Please fill in all fields');
      return;
    }

    try {
      const { data } = await axios.post(
        'https://restuarant-booking-backend.onrender.com',
        {
          firstName,
          lastName,
          email,
          date,
          time,
          phone,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );

      toast.success(data.message);

      // Reset fields after success
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setDate(today);
      setTime(now);

      navigate('/success');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <section className="reservation" id="reservation">
      <div className="container">
        <div className="banner">
          <img src="/reservation.png" alt="res" />
        </div>
        <div className="banner">
          <div className="reservation_form_box">
            <h1>MAKE A RESERVATION</h1>
            <p>For Further Questions, Please Call</p>
            <form onSubmit={handleReservation}>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <input
                  type="time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="email_tag"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <button type="submit">
                RESERVE NOW{' '}
                <span>
                  <HiOutlineArrowNarrowRight />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
