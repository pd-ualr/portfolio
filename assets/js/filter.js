$(function () {
  var filterList = {
    init: function () {
      var filterChoice = localStorage.getItem("filterChoice") || "all";

      // MixItUp plugin
      // http://mixitup.io
      $(".item-grid").mixItUp({
        selectors: {
          target: ".item",
          filter: ".filter",
        },
        load: {
          filter: filterChoice, // Use saved filter or default to 'all'
        },
      });

      $(".filter").attr("aria-pressed", "false");
      $(".filter").each(function () {
        if (this.dataset.filter === filterChoice) {
          this.setAttribute("aria-pressed", "true");
        }
      });

      // Listen for filter changes and save the selected filter in localStorage
      $(".filter").on("click", function () {
        var filterChoice = $(this).data("filter");
        localStorage.setItem("filterChoice", filterChoice); // Save the selected filter
        $(".filter").attr("aria-pressed", "false");
        $(this).attr("aria-pressed", "true");
      });

      $(".filter").on("keydown", function (event) {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          $(this).trigger("click");
        }
      });
    },
  };
  // Run the show!
  filterList.init();
});
