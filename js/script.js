const mainContainer = document.querySelector(".main-container");

setTimeout(() => {
  setTimeout(() => {
    mainContainer.innerHTML = `<p class="count">10<p>`;
    setTimeout(() => {
      mainContainer.innerHTML = `<p class="count">9<p>`;
      setTimeout(() => {
        mainContainer.innerHTML = `<p class="count">8<p>`;
        setTimeout(() => {
          mainContainer.innerHTML = `<p class="count">7<p>`;
          setTimeout(() => {
            mainContainer.innerHTML = `<p class="count">6<p>`;
            setTimeout(() => {
              mainContainer.innerHTML = `<p class="count">5<p>`;
              setTimeout(() => {
                mainContainer.innerHTML = `<p class="count">4<p>`;
                setTimeout(() => {
                  mainContainer.innerHTML = `<p class="count">3<p>`;
                  setTimeout(() => {
                    mainContainer.innerHTML = `<p class="count">2<p>`;
                    setTimeout(() => {
                      mainContainer.innerHTML = `<p class="count">1<p>`;
                      setTimeout(() => {
                        mainContainer.innerHTML = `<p class="count">0<p>`;
                        setTimeout(() => {
                          firework();
                          mainContainer.innerHTML = `<p class="message">Happy Independence Day<p>`;
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
}, 100);
