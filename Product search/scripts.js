function search(){
    const searchBox = document.querySelector('#search-item').value.toUpperCase();
    const storeItems = document.getElementById('productsList')
    const products = document.querySelectorAll('.product')
    const productNames = document.getElementsByTagName('h2')
 
    for (let index = 0; index < productNames.length; index++) {
        let match = products[index].getElementsByTagName('h2')[0]

        if (match) {
            let textValue = match.textContent || match.innerHTML

            if (textValue.toUpperCase().indexOf(searchBox) > -1) {
                products[index].style['display'] = ''
            } else {
                products[index].style['display'] = 'none'                
            }
        }
        
    }

}