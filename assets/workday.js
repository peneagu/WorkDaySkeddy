var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));
var store = window.localStorage;
var container = $(".container");
var now = moment();
var currentTime = { text: moment().format("h:00"), hour: moment().hour() };

var hours = Array.from(new Array(10)).map((v, i) => {
  var text = moment().hour(i).format("h:00");
  var hour = moment().hour(i).format;
  return { text, hour };

}
);

var presentHour = moment().hours();


function color(time) {
  return time.text === currentTime.text
  
}

hours.forEach((hr) => {
  var grid = $(
    `<form data-name="${hr.text}" "></form>.`
  );


  var time = $(
    `<div>${hr.text}</div>`
  );


  var textArea = $(
    `<textarea name="${
      hr.text
    }" ${color(
      hr
    )}">${store.getItem(hr.text) || ""}</textarea>`
  );

     textArea.addClass('col-10 description');


  textArea.keydown((e) => {
    if (e.keyCode == 13 && !e.shiftKey) {
      e.preventDefault();
      return false;
    }
  });

  var saveButton = $(
    `<button type="submit"><i class="fas fa-save text-xl"></i></button>`
    );
    saveButton.addClass('col-1 btn saveBtn');

  grid.submit((e) => {
    e.preventDefault();
    var value = $(`textarea[name="${hr.text}"]`).val();

    store.setItem(hr.text, value);
  });

  grid.append(time);
  grid.append(textArea);
  grid.append(saveButton);

  container.append(grid);
});