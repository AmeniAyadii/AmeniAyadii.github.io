document.addEventListener('DOMContentLoaded', function() {
    const showLoading = () => {
        const overlay = document.createElement('div');
        overlay.className = 'loading-overlay';
        overlay.innerHTML = '<div class="loading-spinner"></div>';
        document.querySelector('.table-container').appendChild(overlay);
        
        setTimeout(() => overlay.remove(), 800); 
    };

    const filterEvents = () => {
        showLoading();
        const searchTerm = document.getElementById('eventSearch').value.toLowerCase();
        const filterValue = document.getElementById('eventFilter').value;
        const rows = document.querySelectorAll('.event-row');
        let visibleCount = 0;

        rows.forEach(row => {
            const category = row.dataset.category;
            const text = row.textContent.toLowerCase();
            const matchesSearch = text.includes(searchTerm);
            const matchesFilter = filterValue === 'all' || category === filterValue;

            if (matchesSearch && matchesFilter) {
                row.style.display = '';
                visibleCount++;
                row.style.animation = 'fadeIn 0.5s ease forwards';
            } else {
                row.style.display = 'none';
            }
        });

        // Show empty state if no results
        const emptyState = document.querySelector('.empty-state');
        if (visibleCount === 0) {
            if (!emptyState) {
                const empty = document.createElement('div');
                empty.className = 'empty-state';
                empty.innerHTML = `
                    <i class="fas fa-search"></i>
                    <h3>No events found</h3>
                    <p>Try adjusting your search or filter</p>
                `;
                document.querySelector('.table-container').appendChild(empty);
            }
        } else if (emptyState) {
            emptyState.remove();
        }
    };

    // Add event listeners
    document.getElementById('eventSearch').addEventListener('input', filterEvents);
    document.getElementById('eventFilter').addEventListener('change', filterEvents);

    // Add hover effect for images
    document.querySelectorAll('.event-title img').forEach(img => {
        img.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.1) rotate(5deg)';
        });
        img.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Event details data
    const eventDetails = {
        'jobfair': {
            title: 'Academic Job Fair',
            date: 'November 2024',
            image: '../images/jobfiar.png',
            location: 'Espace Marssim, Route Teniour km 9,5 Sfax'
        },
        'blockchain': {
            title: 'Blockchain Conference',
            date: 'December 2024',
            image: '../images/blockchain.png',
            location: 'Route Tunis km10, Technopole Sfax'
        }
    };

    // Get modal elements
    const modal = document.getElementById('eventModal');
    const modalImg = document.getElementById('modalImage');
    const closeBtn = document.querySelector('.close-modal');

    // Add click event listeners to all view details buttons
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('click', function() {
            const eventId = this.getAttribute('data-event');
            const event = eventDetails[eventId];
            
            if (event) {
                modalImg.src = event.image;
                modal.style.display = 'block';
                
                // Log for debugging
                console.log('Opening modal for event:', eventId);
            }
        });
    });

    // Close modal when clicking the close button
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Add hover effect for buttons
    document.querySelectorAll('.view-details-btn').forEach(button => {
        button.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-2px)';
        });
        button.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}); 