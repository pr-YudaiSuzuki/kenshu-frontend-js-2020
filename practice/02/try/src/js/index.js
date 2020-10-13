(function () {
  $('#button').on('click', function () {
      var text_type = $(this).attr('data-type');
      var text_class = $(this).attr('class');
      $('.text--type').text(text_type);
      $('.text--class').text(text_class);
  })
})()
