const moviesUrl = "https://ngmovies.herokuapp.com/api/getMovies";

function showMovies(){
    $.ajax({
        url:moviesUrl,
        type:'GET',
        dataType:'json',
        success:function(data){
            for(i=0;i<data.length;i++){
                $('#movies').append(data[i].name+"<br/>")
            }
        }
    })
}