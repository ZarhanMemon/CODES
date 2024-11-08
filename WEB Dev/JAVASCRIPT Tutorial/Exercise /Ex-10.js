/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/



function Business_name_generator() {

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    const adjective = {
        "1": "Crazy",
        "2": "Amazing",
        "3": "Fire"
    };

    const shop_name = {
        "4": "Engine",
        "5": "Foods",
        "6": "Garments"
    };

    const Another_Word = {
        "7": "Bros",
        "8": "Limited",
        "9": "Hub"
    };


    const first_name = adjective[ randomNumber(1, 3)];
    const mid_name = shop_name[randomNumber(4, 6)];
    const last_name = Another_Word[randomNumber(7, 9)];


    let business_name = `\n${first_name} ${mid_name} ${last_name}`;

    return business_name;
}



console.log(Business_name_generator())






