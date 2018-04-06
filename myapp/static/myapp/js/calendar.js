function deleteCalendarEntry(entry) {
  var $entry = $(entry);
  var id = $entry.data('id');
  console.log('current id => ' + id);

  $(entry).parent().remove();

  $.ajax({
    url: 'entry/delete/' + id,
    method : 'DELETE',
    beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRFToken', csrf_token)
    }
  });
}
