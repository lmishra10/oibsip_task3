const ConvertTemp = () => {

    const temp = document.getElementById('temCon').value;

    const tempdiff1 = document.getElementById('tempdiff');
    const temp_val = tempdiff1.options[tempdiff1.selectedIndex].value;

    const CelciusToFah = (temp) => {
        let fah = Math.round((temp * 9 / 5) + 32);
        return fah;
    }


    const FahToCelcius = (temp) => {
        let cel = Math.round((temp - 32) * 5 / 9);
        return cel;
    }

    let result;
    if (temp_val == 'Celcius') {
        result = CelciusToFah(temp);
        document.getElementById('Result').innerHTML = `Result =${result}&deg;Fahrenheit`;
    }
    else {
        result = FahToCelcius(temp);
        document.getElementById('Result').innerHTML = `Result =${result}&deg;Celcius`;
    }

}