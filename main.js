//Cronologie: intai se incarca <body> apoi functia INIT din body porneste; 
    //In functia INIT egalizam 'mediaplayer' cu variabila

let mediaplayer;
let index = 0;

/* Defining arrays with songs / artwork */
let musiques = [];
    musiques.push("Tracks/1. SHADE- Ian Ewing.mp3");
    musiques.push("Tracks/2. U SAY- GoldLink.mp3");
    musiques.push("Tracks/3. KEANU REEVES - Logic.mp3");
    musiques.push("Tracks/4. WATCH IT - Blue Lab Beats.mp3");
    musiques.push("Tracks/5. BOOTY - Abhi The Nomad.mp3");
    musiques.push("Tracks/6. GIVE ME A CHANCE - Engelwood.mp3");
    musiques.push("Tracks/7. KOD - J. Cole.mp3");
    musiques.push("Tracks/8. WHERE & WHEN - P Money.mp3");
    musiques.push("Tracks/9. I DO - John Legend.mp3");

let arts = [];
    arts.push("Artwork/art1.jpg");
    arts.push("Artwork/art2.jpg");
    arts.push("Artwork/art3.jpg");
    arts.push("Artwork/art4.jpg");
    arts.push("Artwork/art5.jpg");
    arts.push("Artwork/art6.jpg");
    arts.push("Artwork/art7.jpg");
    arts.push("Artwork/art8.jpg");
    arts.push("Artwork/art9.jpg");

//WORKING / IN USE
function init() {
    // Asa punem src-ul piesei DIRECT in Java
    mediaplayer = document.getElementById('mediaplayer');
    /* mediaplayer.preload='auto'; */

    document.getElementById('mediaplayer').src=musiques[index]; //STARTING Track
    mediaplayer.volume=0.5; //STARTING volume

    /* document.getElementById('myRangeA').value=document.getElementById('mediaplayer').volume; */

    document.getElementById('songtitle').innerHTML=cleanString(musiques[index]);

    //Java EVENTS MovingDay
    //Play/Pause
    document.getElementById('playpauseicon').addEventListener('click',playPause,false);
    //Previous
    document.getElementById('btn-previous').addEventListener('click',previous,false);
    //Next
    document.getElementById('btn-next').addEventListener('click',next,false);

    //Vol-
    document.getElementById('voldown').addEventListener('click',volumeDown,false);
    //Vol Bar
    document.getElementById('myRangeA').addEventListener('click',volumeslide,false);
    //Vol+
    document.getElementById('volup').addEventListener('click',volumeUp,false);

    //Repeat
    document.getElementById('btn-repeat').addEventListener('click',repeat,false);
    //Mute
    document.getElementById('mute-icn').addEventListener('click',mute,false);




    //Generative Cards

    /*var elto=document.createElement('div');
    elto.innerText=musiques[i];
    elto.setAttribute('data-id',i);
    elto.addEventListener('click', function(mouseevent){
        //console.log(mouseevent);
        index=mouseevent.srcElement.getAttribute('data-id');
        mediaplayer.src=musiques[index];
        playPause();
    }, false);
    document.getElementById('cards').appendChild(elt);*/



    for (var i=0;i<musiques.length;i++) {
        //ACTION

        //Parent
        var carddaddy=document.createElement('div');
        carddaddy.className="col-lg-3 col-md-4 col-sm-6 col-xs-12";
            //Container
            var cardproperties=document.createElement('div');
            cardproperties.className='card text-white bg-dark mb-3';
            //ACTION
            cardproperties.setAttribute('data-id',i);
            cardproperties.addEventListener('click',function(cardclick)
                {
                    index = cardclick.currentTarget.getAttribute('data-id');
                    mediaplayer.src = musiques[index];
                    document.getElementById('songtitle').innerHTML=cleanString(musiques[index]);
                    playPause();

            },false);

                //Child 1
                var cardphoto=document.createElement('IMG');
                cardphoto.className='card-img-top';
                cardphoto.setAttribute('src',arts[i]);
                //Child 2
                var cardbody=document.createElement('div');
                cardbody.className='card-body';
                    //Granchild 1
                    var cardtext=document.createElement("P");
                    cardtext.className='card-text';
                    cardtext.innerHTML=cleanString(musiques[i]);
                    

                
        //Relationships
        cardbody.appendChild(cardtext);

            cardproperties.appendChild(cardphoto);
            cardproperties.appendChild(cardbody);
                carddaddy.appendChild(cardproperties);
                document.getElementById('pater').appendChild(carddaddy); 
                                    //parent ^^ ------------- ^^ child
                                    // Trebuie puse invers
    }
}


// Functions
    function playPause() {
        var media = document.getElementById('mediaplayer');
        if (!media.paused) {
        document.getElementById('mediaplayer').pause();

        /* Btn Replacement */
        document.getElementById('playpauseicon').classList.remove('fa-pause')
        document.getElementById('playpauseicon').classList.add('fa-play');

        /* Time */
        document.getElementById('progression').setAttribute("max",mediaplayer.duration);
        document.getElementById('durationtime').innerHTML = transformTime(mediaplayer.duration);
        
        } else {
            document.getElementById('mediaplayer').play();
            document.getElementById('playpauseicon').classList.remove('fa-play');
            document.getElementById('playpauseicon').classList.add('fa-pause');
            
            document.getElementById('progression').setAttribute("max",mediaplayer.duration);
            document.getElementById('durationtime').innerHTML=transformTime(mediaplayer.duration);
            
        }
    }


    function volumeUp() {
        var nombre = Math.round(mediaplayer.volume*100)/100;

        if (mediaplayer.volume<1) {
            mediaplayer.volume=mediaplayer.volume+0.1;
            document.getElementById('myRangeA').value=mediaplayer.volume;

        }
        console.log(document.getElementById('mediaplayer').volume);
    }
    function volumeDown() {
        var nombre = Math.round(mediaplayer.volume*100)/100;
        console.log(document.getElementById('mediaplayer').volume);

        if (mediaplayer.volume>0) {
            mediaplayer.volume=mediaplayer.volume-0.1;
            document.getElementById('myRangeA').value=mediaplayer.volume;
        }
    }
    function volumeslide() {
        console.log(document.getElementById('mediaplayer').volume);
        mediaplayer.volume = document.getElementById('myRangeA').value;
    }


    function next() {
        index++;
        if (index==musiques.length) {
            index=0;
        }
        
        mediaplayer.src=musiques[index];
        document.getElementById('songtitle').innerHTML=cleanString(musiques[index]);
        mediaplayer.play();
        
        
    }

    function previous() {
        index--;
        if (index==-1) {
            index=0;
        }
        
        mediaplayer.src=musiques[index];
        document.getElementById('songtitle').innerHTML=cleanString(musiques[index]);
        mediaplayer.play();
    }


    /* function getDuration () {
    var duration=document.getElementById('mediaplayer').duration;
    console.log(duration);
    } */
/*  */


//Cleaning song titles
    function replaceAll(str, find, replace) {
        return str.replace(new RegExp(find, 'g'), replace);
    }
  
    /* UNUSED */
    function cleanString(songname) {
      songname=replaceAll(songname,'_',' ');
      songname=replaceAll(songname,'-',' ');
      songname=replaceAll(songname,'.mp3','');
      return songname;
    }
/*  */

  // CURRENT TIME OF SONG
function enLecture() {
	document.getElementById('progression').value=mediaplayer.currentTime;
	document.getElementById('progresstime').innerHTML=transformTime(mediaplayer.currentTime);
}
function transformTime(seconds) {
	var texte="";
	
	/*console.log(Math.floor(seconds/60));
	console.log(seconds%60);*/
	
	if (Math.floor(seconds/60)<10) {
		texte+="0"+Math.floor(seconds/60);
	} else {
		texte+=Math.floor(seconds/60);
	}
	texte+=":";
	if (Math.floor(seconds%60)<10) {
		texte+="0"+Math.floor(seconds%60);
	} else {
		texte+=Math.floor(seconds%60);
	}
		
	return texte;
}
function replaceAll(str, find, replace) {
  return str.replace(new RegExp(find, 'g'), replace);
}
function cleanString(songname) {
	songname=replaceAll(songname,'_',' ');
	songname=replaceAll(songname,'-',' ');
	songname=replaceAll(songname,'.mp3','');
    songname=replaceAll(songname,'Tracks/','');
	return songname;
}
function changeTime() {
	mediaplayer.currentTime=document.getElementById('progression').value;
}



//MISC BUTTONS
function repeat() {
	if (mediaplayer.loop==false) {
		mediaplayer.loop=true;
        document.getElementById("btn-repeat").classList.remove('fa-sync-alt');
        document.getElementById("btn-repeat").classList.add('fa-chevron-right');
        
	} else {
		mediaplayer.loop=false;
		document.getElementById("btn-repeat").classList.remove('fa-chevron-right');
        document.getElementById("btn-repeat").classList.add('fa-sync-alt');
	}
}
function mute(){

	if(mediaplayer.muted==false){
		mediaplayer.muted=true;
		document.getElementById('mute-icn').classList.remove('fa-heart');
        document.getElementById('mute-icn').classList.add('fa-heart-broken');
	} else {
		mediaplayer.muted=false;
        //document.getElementById("btn-mute").innerHTML="Son Off";
        document.getElementById('mute-icn').classList.remove('fa-heart-broken');
        document.getElementById('mute-icn').classList.add('fa-heart');
	}
}


