function computeTea() {
    computeFlavour();
    showResults();
    message();
    }
    
    function computeFlavour() {
        const isSweet = document.body.querySelector('#sweet').checked;
      const isFloral = document.body.querySelector('#floral').checked;
      const isBitter = document.body.querySelector('#bitter').checked;
      const isDelicate = document.body.querySelector('#delicate').checked;
      const isSmoky = document.body.querySelector('#smoky').checked;  
      if(isSweet) {
            console.log('camomile');
      } else if(isFloral) {
          console.log('jasmine' + img);
      } else if(isBitter) {
          console.log('green tea');
      } else if (isDelicate) {
          console.log('white tea')
      } else if (isSmoky) {
          console.log('lapsong souchong')
      } else {
          console.log('please select a flavour')
      }
    }
      
          function showResults() {
        const resultsDiv = document.body.querySelector('#results-container');
      resultsDiv.hidden = false;
      }
    
    function hideResults() {
        const resultsDiv = document.body.querySelector('#results-container');
      resultsDiv.hidden = true;
    }
    function displayMesage(message) {
        document.getElementById('results').innerHTML = message;
      }
    
    