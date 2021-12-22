const getData = (country) => {
    fetch(`https://restcountries.com/v3.1/name/${country}`).then((data) => {
        return data.json()
    }).then(response => {
        const name = document.getElementById('name');
        name.innerText = response[0].name.common;
        const region = document.getElementById('region');
        region.innerText = response[0].region
        const subregion = document.getElementById('subregion');
        subregion.innerText = response[0].subregion;
        const capital = document.getElementById('capital');
        capital.innerText = response[0].capital;
        const flag = document.getElementById('flag');
        flag.innerText = response[0].flag;

    }).catch(err => {
        alert(err.message);
    });

}

getData('usa');

const show = document.getElementById('show')
show.addEventListener("click", (e) => {
    e.preventDefault()
    const countryName = document.getElementById('country-name')
    getData(countryName.value);
});

