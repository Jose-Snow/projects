
const fetchCurrencyRates =  async() =>{
  //CREATE THE DOM ELEMENTS
const amount = document.getElementById('amount').value;
const fromCurrency = document.getElementById('from-currency').value;
const toCurrency = document.getElementById('to-currency').value;

  console.log(`Converting ${amount} from ${fromCurrency} to ${toCurrency}`);


  try{
    const fetchRates= await fetch (`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`, {
      headers: {Accept:'application/json'} 
    }); //request for the data in json format.


      //Check network status. If false, display in console error message
      if (!fetchRates.ok) {
      throw new Error('Response not okay')
    }
    
    //store json data into a javascript object.
    const exchangeRates = await fetchRates.json();
    console.log(exchangeRates);  
 
    const rate = exchangeRates.rates[toCurrency]; //Extract the rate for TO currency. example; exchangeRates.rates['NGN']

    const result = (amount * rate).toFixed(2) //multiply the user amount input by the toCurrency rate to get the value in round to 2 decimals.

    //onchange of the from currency, 
    //fetch the rate for the FROM currency 
    //fetch the rate for the TO currency
    //compare both rates
    //display the per currency exchange rate in the DOM. example; 1 USD = 800 NGN


 

    document.getElementById('converted-value').innerHTML = `${result}${toCurrency}` //display the converted value in the DOM.

    localStorage.setItem(`exchangeRates`, JSON.stringify({result, fromCurrency, toCurrency}));

    //updateLiveRate(); //update the live rate on every conversion.
    
    
  }
  catch(error){
    console.log(error);
    document.getElementById('error-message').innerHTML = 'Error'
  }
 
}

  document.getElementById('convert-btn').addEventListener('click',
    (e)=>
      {e.preventDefault();
      fetchCurrencyRates(); 
    })
    //OR JUST ENTER THE TYPE OF THE BUTTON TO 'button' INSTEAD OF 'submit' TO PREVENT DEFAULT FORM SUBMISSION BEHAVIOR.
     //add event listener to the convert button to trigger the fetchCurrencyRates function on click and prevent default form submission behavior.



    document.getElementById('swap-button').addEventListener('click',
      ()=>{
      const fromSelect = document.getElementById('from-currency');
      const toSelect = document.getElementById('to-currency');

      const currencyValue = fromSelect.value;

      //swap values
      fromSelect.value = toSelect.value ;
      toSelect.value = currencyValue ;
    })

    window.addEventListener('DOMContentLoaded', ()=>{
      const lastResult= JSON.parse(localStorage.getItem('exchangeRates'))
      if(lastResult){
        document.getElementById('converted-value').innerHTML = 
        `${lastResult.result}${lastResult.toCurrency}`
      }
    
    }) 

    //Save the input as user types.
    const amountInput = document.getElementById('amount') ;

    amountInput.addEventListener('input', ()=>{
      localStorage.setItem('savedAmount', amountInput.value)
    })

    //on Page load, get the amount
    window.addEventListener("DOMContentLoaded", ()=>{
      const savedAmount = localStorage.getItem('savedAmount');
      if(savedAmount){
        document.getElementById('amount').value = savedAmount;
      }
    })




    const updateLiveRate = async()=>{

      try{
      const unitFromCurrency = document.getElementById('from-currency').value;
      const unitToCurrency = document.getElementById('to-currency').value;

     
      const fetchApi = await fetch(`https://api.exchangerate-api.com/v4/latest/${unitFromCurrency}`,{
        headers:{Accept:'application/json'}
      })

      if(!fetchApi.ok){
        throw new Error('There is an error')
      }

      const currencyRate = await fetchApi.json()
      console.log(currencyRate);

      const liveRate = currencyRate.rates[unitToCurrency];

      document.getElementById('fromRate').innerHTML = 
      `1 ${unitFromCurrency} = ${liveRate} ${unitToCurrency}`

     
      }



      catch(error){
        console.log(error);
        document.getElementById('errorMessage').innerHTML ='Live rate error, try another exchange'
      }
    }
     //updateLiveRate();

     document.getElementById('from-currency').addEventListener('change', updateLiveRate);
     document.getElementById('to-currency').addEventListener('change', updateLiveRate);
     
     window.addEventListener('DOMContentLoaded', updateLiveRate);




     const showLiveRate = async()=>{
      try{
        const fromLiveRate = document.getElementById('from-currency').value;
        const toLiveRate = document.getElementById('to-currency').value;

        const fetchToRate = await fetch(`https://api.exchangerate-api.com/v4/latest/${toLiveRate}`, {
          headers:{Accept:'application/json'}
        });

        if(!fetchToRate.ok){
          throw new Error('There is an error in response fetched')
        };

        const storeFetchedRate = await fetchToRate.json();
        console.log(storeFetchedRate);


        document.getElementById('toRate').innerHTML =
         `1 ${toLiveRate} = ${storeFetchedRate.rates[fromLiveRate]} ${fromLiveRate}`

      }
      catch(error){
        console.log(error)
      }
     }
     

     document.getElementById('from-currency').addEventListener('change',  showLiveRate);
     document.getElementById('to-currency').addEventListener('change', showLiveRate);
     window.addEventListener('DOMContentLoaded', showLiveRate);

     