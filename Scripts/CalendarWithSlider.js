define([], function() {
		
		var template;
		var activeImage = null;
		var currDate = new Date(2012, 1, 0);
		var minSlider = 0;
		var leftSlider = minSlider, rightSlider = 200 + minSlider;
		var currPosition = 0;
		
		if (typeof SliderWidget == "undefined" || !SliderWidget) {
			var SliderWidget = {};
		}
		
		SliderWidget.Calendar = function() {
			return SliderWidget.Calendar;
		}
		
		SliderWidget.GridMarkerProvider = function (date) {
			var self = this;
			this.month = date || new Date();
			this.retrieveMonthlyEvents = function () {
				//TODO implement actual back-end call to retrieve events
				var currentDate = new Date();
				return [
					{
						date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 5),
						events: [
							{
								heading: "First event heading!",
								snippet: "First event snippet",
								fullDocumentGuid: "U0858BB21C0F911E497C7060000000000",
								metadataDate: "12-Nov-2014"
							},
					{
						heading: "Second event heading!",
						snippet: "Second event snippet",
						fullDocumentGuid: "U0858BB21C0F911E497C7060000000000",
						metadataDate: "13-Feb-2014"
					},
					{
						heading: "Third event heading!",
						snippet: "Third event snippet",
						fullDocumentGuid: "U0858BB21C0F911E497C7060000000000",
						metadataDate: "14-Jul-2014"
					}
						]
					},
					{
						date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 8),
						events: [
							{
								heading: "Corporate governance",
								snippet: "Add changes to be made to the UK Corporate Governance Code following the FRC's April 2014 consultation would be expected to apply in respect of financial years beginning on or after 1 October 2014.",
								fullDocumentGuid: "U0858BB21C0F911E497C7010000000000",
								metadataDate: "17-Sep-2014"
							},
					{
						heading: "UKLA guidance notes",
						snippet: "Last date for responses to the FCA's consultation on the proposed new and amended technical and procedural notes referred to in its eighth Primary Market Bulletin.",
						fullDocumentGuid: "U0858BB21C0F911E497C7020000000000",
						metadataDate: "02-Apr-2014"
					},
					{
						heading: "Corporate governance",
						snippet: "Add changes to be made to the UK Corporate Governance Code following the FRC's April 2014 consultation would be expected to apply in respect of financial years beginning on or after 1 October 2014.",
						fullDocumentGuid: "U0858BB21C0F911E497C7030000000000",
						metadataDate: "07-Jun-2014"
					},
					{
						heading: "UKLA guidance notes",
						snippet: "Last date for responses to the FCA's consultation on the proposed new and amended technical and procedural notes referred to in its eighth Primary Market Bulletin.",
						fullDocumentGuid: "U0858BB21C0F911E497C7040000000000",
						metadataDate: "22-May-2014"
					},
					{
						heading: "Corporate governance",
						snippet: "Add changes to be made to the UK Corporate Governance Code following the FRC's April 2014 consultation would be expected to apply in respect of financial years beginning on or after 1 October 2014.",
						fullDocumentGuid: "U0858BB21C0F911E497C7050000000000",
						metadataDate: "28-Mar-2014"
					},
					{
						heading: "UKLA guidance notes",
						snippet: "Last date for responses to the FCA's consultation on the proposed new and amended technical and procedural notes referred to in its eighth Primary Market Bulletin.",
						fullDocumentGuid: "U0858BB21C0F911E497C7060000000000",
						metadataDate: "12-Dec-2014"
					}
						]
					},
					{
						date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 18),
						events: [
							{
								heading: "Sixth event heading!",
								snippet: "Sixth event snippet",
								fullDocumentGuid: "U0858BB21C0F911E497C7060000000000",
								metadataDate: "15-Oct-2014"
							}
						]
					},
					{
						date: new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0),
						events: [
							{
								heading: "Seventh event heading 2!",
								snippet: "Seventh event snippet 2",
								fullDocumentGuid: "U0858BB21C0F911E497C7060000000000",
								metadataDate: "15-May-2014"
							}
						]
					},
					{
						date: new Date(currentDate.getFullYear(), currentDate.getMonth(), 32),
						events: [
							{
								heading: "Seventh event heading!",
								snippet: "Seventh event snippet",
								fullDocumentGuid: "U0858BB21C0F911E497C7060000000000",
								metadataDate: "15-May-2014"
							}
						]
					}
				];
			};

			SliderWidget.GridMarkerProvider.prototype.getMarkers = function () {
				return self.retrieveMonthlyEvents();
			};
		};
		
		SliderWidget.Calendar.Initialize = function(jsonText) {
			SliderWidget.Calendar.prototype.options = {
				template: template,
				monthNames: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
                ],
				years: [
				2012,
				2013,
				2014,
				2015
				]
			};
		}
		
		SliderWidget.Calendar.setTargetDomElement = function (element) {
			this.prototype.options.container = element;
		};
		
		SliderWidget.Calendar.draw = function() {
			var container = document.getElementById(this.prototype.options.container);
			
			this.objectContainer = container;
			this.objectContainer.innerHTML = this.prototype.options.template;
			
			var yearsMonthDiv = container.getElementsByClassName('year-month-select')[0];
			var selections = yearsMonthDiv.getElementsByTagName('select');
			var slider = container.getElementsByClassName('both-sided-slider')[0];
			var images = slider.getElementsByClassName('slider-img');
			var input = container.getElementsByTagName('input')[0];
			
			images[0].onmousedown = function(e) {
				if (activeImage == null) {
					activeImage = e;
					currPosition = e.pageX;
					activeImage.sliderString = 'left';
				}
			}
			
			images[1].onmousedown = function(e) {
				if (activeImage == null) {
					activeImage = e;
					currPosition = e.pageX;
					activeImage.sliderString = 'right';
				}
			}
			
			slider.onmouseup = function(e) {
				if (activeImage != null) {
					activeImage = null;
				}
			}
			
			for (index = 0; index != this.prototype.options.years.length; index++) {
				selections[0].innerHTML += '<option value="' + this.prototype.options.years[index] + '">' + this.prototype.options.years[index] + '</option>';
			}
			
			for (index = 0; index != this.prototype.options.monthNames.length; index++) {
				selections[1].innerHTML += '<option value="' + index + '">' + this.prototype.options.monthNames[index] + '</options>';
			}
			
			selections[0].onchange = function() {
				var year = selections[0].options[selections[0].selectedIndex].value;
				var dates = slider.getElementsByClassName('dates')[0];
				var resultString = '&nbsp;&nbsp;&nbsp;&nbsp;';
				var index;
				
				currDate.setDate(1);
				currDate.setYear(year);
				currDate.setMonth(currDate.getMonth() + 1, 0);
				
				if (currDate.getDate() % 2 == 0) {
					index = 2;
					resultString += '&nbsp;';
				}
				else
					index = 1;
				
				for (; index <= currDate.getDate(); index += 2) {
					resultString += index + ' &nbsp;';
				}
				dates.innerHTML = resultString;
			}
			
			selections[1].onchange = function() {
				var month = parseInt(selections[1].options[selections[1].selectedIndex].value);
				var dates = slider.getElementsByClassName('dates')[0];
				var resultString = '&nbsp;&nbsp;&nbsp;&nbsp;';
				var index;
				
				currDate.setDate(1);
				currDate.setMonth(month + 1, 0);
				
				if (currDate.getDate() % 2 == 0) {
					index = 2;
					resultString += '&nbsp;';
				}
				else
					index = 1;
				
				for (; index <= currDate.getDate(); index += 2) {
					resultString += index + ' &nbsp;';
				}
				dates.innerHTML = resultString;
			}
			
			slider.onmousemove = function(e) {
				if (activeImage == null)
					return;
				else {
					var pos = e.pageX - currPosition;
					//console.log(pos);
					if (activeImage.sliderString == 'left') {
						if ((leftSlider + pos) <= 235 && (leftSlider + pos) >= minSlider) {
							leftSlider += pos;
							activeImage.srcElement.style.left = (leftSlider - minSlider) + 'px';
							currPosition = e.pageX;
						}
					}
					else {
						if ((rightSlider + pos) <= 235 && (rightSlider + pos) >= minSlider) {
							rightSlider += pos;
							activeImage.srcElement.style.left = (rightSlider - minSlider) + 'px';
							currPosition = e.pageX;
						}
					}
				}
				e.preventDefault();
				e.stopPropagation();
			}
			
			slider.onmouseout = function(e) {
				if (activeImage != null)
					slider.onmouseup(e);
			}
			
			input.onclick = function(e) {
				var maxPixels = 230;
				var coeff = 4.42;
				var provider = new SliderWidget.GridMarkerProvider();
				var data = provider.retrieveMonthlyEvents();
				var month = parseInt(selections[1].options[selections[1].selectedIndex].value);
				var year = parseInt(selections[0].options[selections[0].selectedIndex].value);
				var selDate = new Date(year, month + 1, 0);
				var leftDate = new Date(year, month, leftSlider < coeff * 9 ? Math.trunc(leftSlider / coeff) + 1 : Math.trunc((leftSlider - coeff * 9) / (2 * coeff)) + 10);
				var rightDate = new Date(year, month, rightSlider < coeff * 9 ? Math.trunc(rightSlider / coeff) + 1 : Math.trunc((rightSlider - coeff * 9) / (2 * coeff)) + 10);
				var result = container.getElementsByClassName('view-all-result')[0];
				result.innerHTML = '';
				
				for (index = 0; index != data.length; index++) {
					if (data[index].date >= leftDate && data[index].date <= rightDate) {
						result.innerHTML += '<h2>' + data[index].date.toString() + '</h2><br/>';
						for (index2 = 0; index2 != data[index].events.length; index2++) {
							result.innerHTML += '<hr/><h3>' + data[index].events[index2].heading + '</h3><br/>' + data[index].events[index2].snippet + '<br/>';
						}
					}
				}
			}
		}
		
		var xhr = new XMLHttpRequest();
        xhr.open('GET', 'Templates/CalendarTemplate.html', false);
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) return;
            template = this.responseText;
        };
        xhr.send();
		
		return SliderWidget;
	}
)