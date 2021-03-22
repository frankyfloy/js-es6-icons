$(document).ready(function (){
    js_es6_icons();

});


function js_es6_icons(){
    a_Icon = [
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

    let div_Str = `<div class="d-flex my-card m-2"></div> `;
    a_Icon.forEach((item, i) => {

        $("#myConsole").append(div_Str)

        let icon_Str = `<i type="${item.type}" class="${item.family} ${item.prefix}${item.name} fa-3x m-auto text-primary"></i>`;

        $("#myConsole").children().eq(i).append(icon_Str)
    });









    console.log(a_Icon);
}
