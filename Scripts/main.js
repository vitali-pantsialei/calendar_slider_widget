require(['./CalendarWithSlider'], function (calendarWidget) {
    calendar = new calendarWidget.Calendar();
    calendar.Initialize(null);
    calendar.setTargetDomElement('result');
    calendar.draw();
})
