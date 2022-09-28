$(document).ready(function () {
  /**********Datepicker***********/
  var dateToday = new Date();
  var dates = $("#date_calendar").datepicker({
    minDate: dateToday,
    dateFormat: "M d,y",
    onSelect: function (selectedDate) {
      var option = this.id == "date_calendar" ? "minDate" : "maxDate",
        instance = $(this).data("datepicker"),
        date = $.datepicker.parseDate(
          instance.settings.dateFormat || $.datepicker._defaults.dateFormat,
          selectedDate,
          instance.settings
        );
      dates.not(this).datepicker("option", option, date);
    },
  });
});
