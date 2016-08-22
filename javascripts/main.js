
// jQuery shortcuts
// $('textarea').addClass("add a html class on elem")
// $('textarea').removeClass("remove a html class on elem")
// $('button').prop('disabled', 'true') //affect a property
// $("button").html("<em>emphasizes text & eval tags</em>");
// $("button").text("emphasizes text without eval tags");
// $("button").remove(); //"remove html elem from the page
// $('str').appendTo('textarea'); //jQuery has a function called appendTo() that allows you to select HTML elements and append them to another element.
// $('#target5').clone().appendTo('#left-well'); //copy elements from one place to another.
// $("#left-well").parent().css("background-color", "blue") //parent() allows you to access the parent of whichever element you've selected.
// $("#left-well").children().css("color", "blue" //children() allows you to access the children of whichever element you've selected.
// target:nth-child(n) css selector allows you to select all the nth elements with the target class or element type.
// Here's how you would give the third element in each well the bounce class:
// $(".target:nth-child(3)").addClass("animated bounce");
//$(".target:odd").addClass("animated shake"); //this's how you would target all the odd-numbered (can use 'even' instead of 'odd' (jQuery is zero-indexed) elements with class target and give them classes

function loadData() {
  var $quoteArea = $('#quote-area');
  var $genBtn    = $('#generate-btn');

//clear old data before generating new qoute
  // $quoteArea.text("");

// $quoteArea.text('hello from the other side');
//do $.ajax and add quotes
  var url = 'https://api.chucknorris.io/jokes/random';

  $.getJSON(url, function(data) {
      // $quoteArea.append('<h6 class="quote">' + data.value + '</h6>');
      var tweet = 'https://twitter.com/intent/tweet?text='
      var via   = 'via @sliqric'
      $quoteArea.text(data.value);
      $quoteArea.append('<a href=" ' + tweet + data.value + ' via @MatChilling' + '"' + ' target="_blank"' + '>' + '<br>' +
       '<em>' + 'Tweet this!' + '<em>' + '</a>')
  })

  return false;
};

$('#form-container').submit(loadData);
