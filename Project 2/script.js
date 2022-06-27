//  Get DOM Elements

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');




// Get the ticket price from the selectMovie dropdown


let ticketPrice = +movieSelect.value;

// Call the udpate UI function - get data from localstorage and update the UI

updateUI();

// Function to update counts

function updateSelectedCount() {
    // Calculate how many seats are selected

    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    // Create an array using the node list

    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    // Get the number of seats from the node list

    const selectedSeatsCount = selectedSeats.length;
    // Update DOM with the count

    count.innerText = selectedSeatsCount;
    // Update DOM with total price

    total.innerText = selectedSeatsCount * ticketPrice;
    // Save data to local storage

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))
}

// Function to save the selected movie data in local storage


function setMovieData(movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

// Funciton to get data from localstorage and update the UI



function updateUI() {
    // Get the selectedSeats data from localstorage

    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
    // Check if there are any selected seats

    if (selectedSeats !== null && selectedSeats.length > 0) {
        // Loop over all the seats in the theater

        seats.forEach((seat, index) => {
            // If the index of seat is contained inside selectedSeats array

            if (selectedSeats.indexOf(index) > -1) {
                // Add the selected class to the seat

                seat.classList.add('selected')
            }

        })

    };
    // Get the selected movie from localstorage

    const selectedMovieIndex = localStorage.getItem('selectedMovieInded');
    // Check if there is a movie index

    if (selectedMovieIndex !== null) {
        // Use the movieIndex from localstorage to update the movie from dropdown

        movieSelect.selectedMovieIndex = selectedMovieIndex;
    }
}

// Update the counts
updateSelectedCount();




// Event Listeners

// 1. Event listner for for container to check for click on seats
container.addEventListener('click', e => {
    // Check if target has a class of seat and also is not occupied


    if (e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied')
    )
    // Add or remove the selected class on click

    {
        e.target.classList.toggle('selected');
        // Update the count of selected seats

        updateSelectedCount();
    }
})

// Event listner for movie select
movieSelect.addEventListener('change', e => {

        // Update ticket price to the selected movie

        ticketPrice = +e.target.value;
        // Update the counts in the DOM
        updateSelectedCount();
        // Save the movie data to the local storage

        setMovieData(e.target.selectedIndex, e.target.value);

    }

)