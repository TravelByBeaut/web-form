function computeTea() {
    computeFlavour();
    message();
    }
    
    function computeFlavour() {
        const isSweet = document.body.querySelector('#sweet').checked;
      const isFloral = document.body.querySelector('#floral').checked;
      const isBitter = document.body.querySelector('#bitter').checked;
      const isDelicate = document.body.querySelector('#delicate').checked;
      const isSmoky = document.body.querySelector('#smoky').checked;  
      if(isSweet) {
            displayMessage('camomile');
      } else if(isFloral) {
          displayMessage('jasmine');
      } else if(isBitter) {
          displayMessage('green tea');
      } else if (isDelicate) {
          displayMessage('white tea')
      } else if (isSmoky) {
          displayMessage('lapsong souchong')
      } else {
          displayMessage('please select a flavour')
      }
    }
    function displayMessage(message) {
      document.getElementById('results').innerHTML = message;
    
    }
    
    