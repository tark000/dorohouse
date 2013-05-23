# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/



jQuery ->
$('form').on 'click', '.remove_fields', (event) ->
  $(this).prev('input[type=hidden]').val('1')
  $(this).closest('fieldset').hide()
  event.preventDefault()

$('form').on 'click', '.add_fields', (event) ->
  time = new Date().getTime()
  regexp = new RegExp($(this).data('id'), 'g')
  $(this).before($(this).data('fields').replace(regexp, time))
  event.preventDefault()


jQuery ->
  $('#advert_street_id').parent().hide()
  streets = $('#advert_street_id').html()
  $('#advert_city_id').change ->
    city = $('#advert_city_id :selected').text()
    options = $(streets).filter("optgroup[label='#{city}']").html()
    if options
      $('#advert_street_id').html(options)
      $('#advert_street_id').parent().show()
    else
      $('#advert_street_id').empty()
      $('#advert_street_id').parent().hide()

jQuery ->
  $('#advert_city_district_id').parent().hide()
  districts = $('#advert_city_district_id').html()
  $('#advert_city_id').change ->
    city = $('#advert_city_id :selected').text()
    options = $(districts).filter("optgroup[label='#{city}']").html()
    if options
      $('#advert_city_district_id').html(options)
      $('#advert_city_district_id').parent().show()
    else
      $('#advert_city_district_id').empty()
      $('#advert_city_district_id').parent().hide()


