


function inicio() {
    
    const caixaN = [];

    
    fillArrayWithRandomNumbers(caixaN);

    
    console.log('Array antes da ordenação:', caixaN);

    
    sortArray(caixaN, 'asc');

  
    console.log('Array após ordenação crescente:', caixaN);

    
    fillArrayWithRandomNumbers(caixaN);

    console.log('Array antes da ordenação:', caixaN);

    
    sortArray(caixaN, 'desc');

    console.log('Array após ordenação decrescente:', caixaN);
}