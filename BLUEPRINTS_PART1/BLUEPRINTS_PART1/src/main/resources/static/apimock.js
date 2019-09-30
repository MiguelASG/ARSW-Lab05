apimock=(function name(params) {
    var mockdata=[];

    mockdata["author3"]=[
        {
            author:"author3",
            name:"new blueprint",
            points:[
                {x:50, y:100},
                {x:60, y:200},
                {x:70, y:300}
            ]
        },
        {
            author:"author3",
            name:"new blueprint 1",
            points:[
                {x:10, y:900},
                {x:20, y:800},
                {x:30, y:700}
            ]
        }
            

    ];

    mockdata["author4"]=[
        {
            author:"author4",
            name:"new blueprint",
            points:[
                {x:40, y:600},
                {x:50, y:500},
                {x:60, y:400}
            ]
        },
        {
            author:"author4",
            name:"new blueprint 1",
            points:[
                {x:70, y:300},
                {x:80, y:200},
                {x:90, y:100}
            ]
        }
            

    ];


        return{
            getBLueprintsByAuthor:function(name,callback){
                callback(
                    mockdata[name]
                );
            },
            getBLueprintsByNameAndAuthor:function(author, name, callback){
                callback(
                    mockdata[author].filter(obj => {
                        return obj.name == name;
                    })[0]
                );
            }
        }
})();