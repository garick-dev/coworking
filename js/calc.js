function Start() {
  var chislo = document.getElementById("chislo").value;
  var chislo = document.getElementById("chislo-new").value;
  var radios = document.getElementsByName("n2");

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].type == "radio" && radios[i].checked) {
      var radio = parseInt(radios[i].value);
    }
  }

  var checkboxes = document.getElementsByClassName("checkbox_input");
  checkbox = [];
  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].type == "checkbox" && checkboxes[i].checked) {
      checkbox[checkbox.length] = checkboxes[i].value;
    }
  }

  var result = chislo * radio;

  for (var i = 0; i < checkbox.length; i++) {
    var sum = checkbox[i];

    result = result + sum * chislo;
  }

  document.getElementById("result-1").innerHTML =
    "Итоговая стоимость: " + result + " рублей";
  document.getElementById("result-2").innerHTML =
    "Итоговая стоимость: " + result + " рублей";
  document.getElementById("result-3").innerHTML =
    "Итоговая стоимость: " + result + " рублей";
  document.getElementById("result-4").innerHTML =
    "Итоговая стоимость: " + result + " рублей";
}

// Модальное окно

// открыть по кнопке
$(".js-button-calc").click(function () {
  $(".js-overlay-calc").fadeIn();
  $(".wrapper").css("display", "none");
  $(".wrapper-gallery").css("display", "none");
});

// закрыть на крестик
$(".js-close-popup").click(function () {
  $("#result-1").empty();
  $("div:empty").text("");
  $("input[type=checkbox]").prop("checked", false);
  $("input[type=radio]").prop("checked", true);
  $("input#chislo").val("1");
  $("input#chislo-new").val("1");
  $(".js-overlay-calc").fadeOut();
  $(".wrapper").css("display", "");
  $(".wrapper-gallery").css("display", "");
});

// закрыть по клику вне окна
$(document).mouseup(function (e) {
  var popup = $(".js-popup-calc");
  if (e.target != popup[0] && popup.has(e.target).length === 0) {
    $("#result-1").empty();
    $("#result-2").empty();
    $("#result-3").empty();
    $("#result-4").empty();
    $("div:empty").text("");
    $("input[type=checkbox]").prop("checked", false);
    $("input[type=radio]").prop("checked", true);
    $("input#chislo").val("1");
    $("input#chislo-new").val("1");
    $(".js-overlay-calc").fadeOut();
    $(".wrapper").css("display", "");
    $(".wrapper-gallery").css("display", "");
  }
});

//Максимально символов в числе

$(document).ready(function () {
  $("#chislo").keypress(function () {
    if (this.value.length == 2) {
      return false;
    }
  });
});

$(document).ready(function () {
  $("#chislo-new").keypress(function () {
    if (this.value.length == 2) {
      return false;
    }
  });
});
