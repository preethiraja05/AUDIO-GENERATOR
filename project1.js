 const text = document.getElementById("textToConvert");
 const convertBtn = document.getElementById("convertBtn");

    convertBtn.addEventListener('click', function () {
      const speechSynth = window.speechSynthesis;
      const enteredText = text.value.trim();
      const error = document.querySelector('.error-para');

      if (!enteredText.length) {
        error.textContent = "ERROR: Nothing to Convert!Please enter the text above...!";
        return;
      }

      error.textContent = "";

      const newUtter = new SpeechSynthesisUtterance(enteredText);
      speechSynth.speak(newUtter);

      convertBtn.textContent = "HERE'S THE AUDIO...";

      newUtter.onend = function () {
        convertBtn.textContent = "***...LET's HEAR IT AGAIN...***";
      };
    });
  