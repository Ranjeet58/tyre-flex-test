export async function loadReviews() {
    try {
      const response = await fetch('./assets/data/reviews.json');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const reviews = await response.json();
      return reviews;
    } catch (error) {
      console.error('Failed to load reviews:', error);
      return [];
    }
  }
  
  export function createReviewHTML(review) {
    return `
      <div class="review-main-content">
        <div class="row d-flex justify-space-between">
          <div class="col-md-1">
            <div class="review-avatar-wrap d-flex align-items-center">
              <div class="user-avatar">
                <img decoding="async" alt="icon" width="30" height="30" src="${review.image}" loading="eager">
              </div>
            </div>
          </div>
          <div class="col-md-11">
            <div class="rating-stars d-flex flex-column">
              <div class="d-flex align-items-center star-icons">
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
                <i class="bi bi-star-fill"></i>
              </div>
              <div class="user-deails-inner">
                <div class="user-post-named">
                 <span class="user-name">${review.username}</span>
                 <span>.</span> 
                 <span class="posted-date">${review.postdate}</span>
                </div>
                <div class="user-comment">
                  ${review.usercomment}
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>`;
  }
  

  export function createModalTopHeaderHTML(){
    return `
    <div class="review-modal-header">
       <div class="row d-flex justify-space-between">
         <h6>50 Verified Reviews</h6>
       </div>
    </div>`;
  }