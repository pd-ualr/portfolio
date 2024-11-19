$(function () {
  var filterList = {
    init: function () {
      // MixItUp plugin
      // http://mixitup.io
      $(".item-grid").mixItUp({
        selectors: {
          target: ".item",
          filter: ".filter",
        },
        load: {
          filter: localStorage.getItem("filterChoice") || "all", // Use saved filter or default to 'all'
        },
      });

      // Listen for filter changes and save the selected filter in localStorage
      $(".filter").on("click", function () {
        var filterChoice = $(this).data("filter");
        localStorage.setItem("filterChoice", filterChoice); // Save the selected filter
      });
    },
  };
  // Run the show!
  filterList.init();
});
