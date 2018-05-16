jQuery(document).ready( function($) {
  var next_id = 0;

  // Set heading field value
  $('.chapter-officers-heading').val(chapter_officers.heading);

  // Add Officer Row
  var addOfficerRow = function (row) {
    var container = $('<div class="inside"></div>').attr('id', 'chapter_officer_' + next_id);

    // Divider
    $(container).append('<hr />');

    // Form Fields
    var tableForm = $('<table class="form-table chapter-officers-item"></table>');
    tableForm.append('<tr valign="top"><th>Name</th><td><input type="text" class="regular-text chapter-officer-name" /></td></tr>');
    tableForm.append('<tr valign="top"><th>Title</th><td><input type="text" class="regular-text chapter-officer-title" /></td></tr>');
    tableForm.append('<tr valign="top"><th>Photo Url</th><td><input type="url" class="regular-text chapter-officer-photo_url" /></td></tr>');

    // Set form field values, if available
    $('input.chapter-officer-name', tableForm).val(row.name);
    $('input.chapter-officer-title', tableForm).val(row.title);
    $('input.chapter-officer-photo_url', tableForm).val(row.photo_url);

    // Append form fields
    $(container).append(tableForm);

    // Delete Button
    var deleteButton = $('<button type="button">Delete</button>');
    deleteButton.addClass('button button-secondary chapter-officer-row-delete');
    deleteButton.data('row-id', next_id);
    deleteButton.on('click', function(e) {
      e.preventDefault();
      var id = $(this).data('row-id');
      if (window.confirm('Delete this officer?')) {
        $('#chapter_officer_' + id).remove();
      }
    });
    $(container).append(deleteButton);

    // Add row to container
    $('.chapter-officers-items').append(container);
    next_id++; // iterate next_id
  }
  
  // Handle Submit
  $('form').on('submit', function(e) {
    e.preventDefault();
    var items = [];
    $('.chapter-officers-item').each(function (k, row) {
      items.push({
        name: $('input.chapter-officer-name', row).val(),
        title: $('input.chapter-officer-title', row).val(),
        photo_url: $('input.chapter-officer-photo_url', row).val()
      });
    })
    var formData = {
      action: 'chapter_officers_save',
      payload: {
        heading: $('.chapter-officers-heading').val(),
        items: items
      }
    }
    // Save data through AJAX endpoint
    $.post(ajaxurl, formData, function(response, status) {
      if (status == 'success') {
        window.alert('Data saved!');
      }
      else {
        window.alert('Unable to save data');
      }
    });
  });

  // Add Row Button
  $('.chapter-officer-row-add').on('click', function(e) {
    e.preventDefault();
    addOfficerRow({
      name: '',
      title: '',
      photo_url: ''
    })
  });

  // Loop through existing records and add rows
  for (var i = 0; i < chapter_officers.items.length; i++) {
    addOfficerRow(chapter_officers.items[i]);
  }
});
