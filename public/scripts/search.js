$('#beer-search').on('input', function() {
  var search = $(this).serialize();
  if(search === "search=") {
    search = "all";
  }
  $.get('/beers?' + search, function(data) {
    $('#beer-grid').html('');
    data.forEach(function(beer) {
      $('#beer-grid').append(`
        <div class="col-md-3 col-sm-6">
          <div class="thumbnail">
            <img src="${ beer.image }">
            <div class="caption">
              <h4>${ beer.brewery }</h4>
              <h4>${ beer.name }</h4>
            </div>
            <p>
              <a href="/beers/${ beer._id }" class="btn btn-primary">More Info</a>
            </p>
          </div>
        </div>
      `);
    });
  });
});

$('#beer-search').submit(function(event) {
  event.preventDefault();
});