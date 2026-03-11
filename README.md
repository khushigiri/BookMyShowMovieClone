# BookMyShow Clone (React)

A BookMyShow-inspired movie browsing web application built using React.js.
The application allows users to explore movies, view details, see cast information, browse plays, and simulate movie rental or purchase using a Razorpay payment modal.

This project fetches movie data dynamically from **The Movie Database (TMDB) API** and displays it using responsive UI components built with **Tailwind CSS**.

---

## Features

* Browse popular, top-rated, and upcoming movies
* Interactive hero carousel
* Detailed movie information page
* Cast and crew slider
* Recommended and similar movies
* Browse plays and events
* Razorpay payment integration for rent or buy
* Fully responsive design
* Movie search UI
* Dynamic poster sliders

---

## Tech Stack

**Frontend**

* React.js
* Tailwind CSS
* React Router DOM
* Axios

**UI & Libraries**

* React Slick (Carousel)
* Headless UI
* React Icons

**API**

* TMDB API (The Movie Database)

**Payment**

* Razorpay Payment Gateway

---

## Screens

* Home page with movie carousels
* Movie details page with cast, offers, and recommendations
* Plays page with filters
* Razorpay payment modal

---

## Payment Integration

The project integrates **Razorpay** for simulated movie purchase or rental.

Payment options:

* Rent Movie
* Buy Movie

---

## API Used

The application uses TMDB API endpoints such as:

* `/movie/popular`
* `/movie/top_rated`
* `/movie/upcoming`
* `/movie/{id}`
* `/movie/{id}/credits`
* `/movie/{id}/similar`
* `/movie/{id}/recommendations`

---

## Responsive Design

The UI adapts to:

* Mobile devices
* Tablets
* Desktop screens

Using Tailwind CSS utility classes.

---