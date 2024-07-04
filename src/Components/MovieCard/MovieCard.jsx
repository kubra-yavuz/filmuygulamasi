import React from "react";

function MovieCard() {
  return (
    <button>
      <div class="ui card">
        <div class="image">
          <img src="/images/avatar2/large/kristy.png" alt="poster" />
        </div>
        <div class="content">
          <a class="header">Film İsmi</a>
          <div class="meta">
            <span class="date">Yayın Tarihi</span>
          </div>
          <div class="description">
            Kristy is an art director living in New York.
          </div>
        </div>
        <div class="extra content">
          <a>Filmi İzle</a>
        </div>
      </div>
    </button>
  );
}

export default MovieCard;
