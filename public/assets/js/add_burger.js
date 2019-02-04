$(function() {
    $(".eatBurger").on("click", function(event) {
        console.log("click");
      var id = $(this).data("id");
      var eatenBurger = $(this).data("ifdevoured");
      var newEatState = {
        devoured: eatenBurger
      };
  
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newEatState
      }).then(
        function() {
          console.log("changed sleep to", eatenBurger);
          location.reload();
        }
      );
    });
  
    $(".create-form").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#newBurger").val().trim(),
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        }
      );
    });
  });