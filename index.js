function ComputeTea() {
	const isSweet = document.body.querySelector('#sweet').checked;
  const isFloral = document.body.querySelector('#floral').checked;
  const isBitter = document.body.querySelector('#bitter').checked;
  const isDelicate = document.body.querySelector('#delicate').checked;
  const isSmoky = document.body.querySelector('#smoky').checked;
  
  function computeTea() {
	const resultsDiv = document.body.querySelector('#results-container');
  resultsDiv.hidden = false;
}

function hideResults() {
	const resultsDiv = document.body.querySelector('#results-container');
  resultsDiv.hidden = true;
}

  if(isSweet) {
  	  console.log('camomile');
  } else if(isFloral) {
      console.log('jasmine');
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
console.log = function(message) {
    document.getElementById('result').innerHTML = message;
};
console.log('');
