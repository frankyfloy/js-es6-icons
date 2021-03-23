$(document).ready(function (){
    js_es6_icons();

});


function js_es6_icons(){
    const a_Icon = [
    	{
    		name: 'cat',
    		prefix: 'fa-',
    		type: 'animal',
    		family: 'fas'
    	},
    	{
    		name: 'crow',
    		prefix: 'fa-',
    		type: 'animal',
    		family: 'fas'
    	},
    	{
    		name: 'dog',
    		prefix: 'fa-',
    		type: 'animal',
    		family: 'fas'
    	},
    	{
    		name: 'dove',
    		prefix: 'fa-',
    		type: 'animal',
    		family: 'fas'
    	},
    	{
    		name: 'dragon',
    		prefix: 'fa-',
    		type: 'animal',
    		family: 'fas'
    	},
    	{
    		name: 'horse',
    		prefix: 'fa-',
    		type: 'animal',
    		family: 'fas'
    	},
    	{
    		name: 'hippo',
    		prefix: 'fa-',
    		type: 'animal',
    		family: 'fas'
    	},
    	{
    		name: 'fish',
    		prefix: 'fa-',
    		type: 'animal',
    		family: 'fas'
    	},
    	{
    		name: 'carrot',
    		prefix: 'fa-',
    		type: 'vegetable',
    		family: 'fas'
    	},
    	{
    		name: 'apple-alt',
    		prefix: 'fa-',
    		type: 'vegetable',
    		family: 'fas'
    	},
    	{
    		name: 'lemon',
    		prefix: 'fa-',
    		type: 'vegetable',
    		family: 'fas'
    	},
    	{
    		name: 'pepper-hot',
    		prefix: 'fa-',
    		type: 'vegetable',
    		family: 'fas'
    	},
    	{
    		name: 'user-astronaut',
    		prefix: 'fa-',
    		type: 'user',
    		family: 'fas'
    	},
    	{
    		name: 'user-graduate',
    		prefix: 'fa-',
    		type: 'user',
    		family: 'fas'
    	},
    	{
    		name: 'user-ninja',
    		prefix: 'fa-',
    		type: 'user',
    		family: 'fas'
    	},
    	{
    		name: 'user-secret',
    		prefix: 'fa-',
    		type: 'user',
    		family: 'fas'
    	}
    ];

    // Copia elementi nel mio array All
    const a_All = a_Icon.map((element) => {
        return element;
    });

    const a_Animal = a_Icon.filter((element) => {
        if (element.type === "animal") {
            return element;
        }
    });

    const a_User = a_Icon.filter((element) => {
        if (element.type === "user") {
            return element;
        }
    });

    const a_Vegetable = a_Icon.filter((element) => {
        if (element.type === "vegetable") {
            return element;
        }
    });

    // Riempimento iniziale conteiner con card All type
    addIconTable(a_All);

    $(`#iconSelect`).change(function(){
        $("#myConsole").children().remove();
        switch ($(this).val()) {

            case "All":
                addIconTable(a_All);
                break;
            case "animal":
                addIconTable(a_Animal);
                break;
            case "vegetable":
                addIconTable(a_Vegetable);
                break;
            case "user":
                addIconTable(a_User);
                break;
            default:

        }
    });


    function addIconTable(array){
        array.forEach((item, i) => {
            // Inizializzazione div card è aggiunta al dom
            let div_Str = `<div class="d-flex my-card m-2"></div> `;
            $("#myConsole").append(div_Str);

            // Inizializzazione tag icon
            let icon_Str = `<i type="${item.type}" class="${item.family} ${item.prefix}${item.name} fa-3x m-auto"></i>`;

            // Aggiunta al dom del tag li con proprietà relative al proprio tipo
            if (item.type == "user") {
                $("#myConsole").children().eq(i).append(icon_Str);
                // Agginta classe color al tag <i> figlio del div appena creato
                $("#myConsole").children().eq(i).children().addClass("color-blu");
            }else if (item.type == "vegetable") {
                $("#myConsole").children().eq(i).append(icon_Str);
                // Agginta classe color al tag <i> figlio del div appena creato
                $("#myConsole").children().eq(i).children().addClass("color-yellow");
            }else if (item.type == "animal") {
                $("#myConsole").children().eq(i).append(icon_Str);
                // Agginta classe color al tag <i> figlio del div appena creato
                $("#myConsole").children().eq(i).children().addClass("color-purple");
            }
        });
    }
}
