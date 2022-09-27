$(document).ready(function () {
  /**********Datepicker***********/
  var dateToday = new Date();
  var dates = $("#from").datepicker({
    minDate: dateToday,
    dateFormat: "M d,y",
    onSelect: function (selectedDate) {
      var option = this.id == "from" ? "minDate" : "maxDate",
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
