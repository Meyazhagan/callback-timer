function timer() {
  setTimeout(() => {
    setValue(10);
    setTimeout(() => {
      setValue(9);
      setTimeout(() => {
        setValue(8);
        setTimeout(() => {
          setValue(7);
          setTimeout(() => {
            setValue(6);
            setTimeout(() => {
              setValue(5);
              setTimeout(() => {
                setValue(4);
                setTimeout(() => {
                  setValue(3);
                  setTimeout(() => {
                    setValue(2);
                    setTimeout(() => {
                      setValue(1);
                      setTimeout(() => {
                        setValue(0);
                        setTimeout(() => {
                          setValue("Happy Independence Day");
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}

function setValue(value) {
  const mainContainer = document.querySelector(".main-container");
  if (value === "Happy Independence Day") {
    firework();
    mainContainer.innerHTML = `<p class="message">${value}<p>`;
    return;
  }
  mainContainer.innerHTML = `<p class="count">${value}<p>`;
}

timer();
