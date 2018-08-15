<<<<<<< HEAD
$('#contact_button').on('click', function () {
    $("#effeckt-modal-wrap").show();

    window.setTimeout(function() {
        $("#effeckt-modal-wrap").addClass('md-effect-8');
        $("#effeckt-modal-wrap").addClass("effeckt-show");
        $('#effeckt-overlay').addClass("effeckt-show");

        $(".effeckt-modal-close, .effeckt-overlay").on("click", function () {
            $("#effeckt-modal-wrap").fadeOut();
            $('#effeckt-modal-wrap').removeClass("effeckt-show");
            $("#effeckt-modal-wrap").removeClass('md-effect-8');
            $('#effeckt-overlay').removeClass("effeckt-show");
        });
    }, 10);
});

// retrieve the element
element = document.getElementById("contact_button");

// reset the transition by...
element.addEventListener("click", function(e) {
  e.preventDefault;

  element2 =

  // -> removing the class
  element.classList.remove("#effeckt-modal-wrap");
  element.classList.remove("#effeckt-modal-wrap");
  element.classList.remove("#effeckt-modal-wrap");


  ('').removeClass("effeckt-show");
  $("#effeckt-modal-wrap").removeClass('md-effect-8');
  $('#effeckt-overlay').removeClass("effeckt-show");

  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // Oops! This won't work in strict mode. Thanks Felis Phasma!
  // element.offsetWidth = element.offsetWidth;
  // Do this instead:
  void element.offsetWidth;

  // -> and re-adding the class
  element.classList.add("run-animation");
}, false);
=======
$('#contact_button').on('click', function () {
    $("#effeckt-modal-wrap").show();

    window.setTimeout(function() {
        $("#effeckt-modal-wrap").addClass('md-effect-8');
        $("#effeckt-modal-wrap").addClass("effeckt-show");
        $('#effeckt-overlay').addClass("effeckt-show");

        $(".effeckt-modal-close, .effeckt-overlay").on("click", function () {
            $("#effeckt-modal-wrap").fadeOut();
            $('#effeckt-modal-wrap').removeClass("effeckt-show");
            $("#effeckt-modal-wrap").removeClass('md-effect-8');
            $('#effeckt-overlay').removeClass("effeckt-show");
        });
    }, 10);
});

// retrieve the element
element = document.getElementById("contact_button");

// reset the transition by...
element.addEventListener("click", function(e) {
  e.preventDefault;

  element2 =

  // -> removing the class
  element.classList.remove("#effeckt-modal-wrap");
  element.classList.remove("#effeckt-modal-wrap");
  element.classList.remove("#effeckt-modal-wrap");


  ('').removeClass("effeckt-show");
  $("#effeckt-modal-wrap").removeClass('md-effect-8');
  $('#effeckt-overlay').removeClass("effeckt-show");

  // -> triggering reflow /* The actual magic */
  // without this it wouldn't work. Try uncommenting the line and the transition won't be retriggered.
  // Oops! This won't work in strict mode. Thanks Felis Phasma!
  // element.offsetWidth = element.offsetWidth;
  // Do this instead:
  void element.offsetWidth;

  // -> and re-adding the class
  element.classList.add("run-animation");
}, false);
>>>>>>> done: Text over Video background, Add blue overlay to video to make text more readable; fix: Overlay not covering whole video, Remove blank white space aside video, Remove scroll bars
