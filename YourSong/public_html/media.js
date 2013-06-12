/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
function Song (interprets,titels,points) { /* Objekt Song mit seinen Methoden*/
	this.interpret = interprets;
	this.titel = titels;
        this.points = points;
        
        this.toStrI= function(){
        return "Interpret: "+this.interpret+" ; Song: "+this.titel+" ; Punkte: "+this.points;
        };
        
        this.toStrS = function(){
            return "Interpret: "+this.interpret+" ; Song: "+this.titel+" ; Punkte: "+this.points;
        };      
	}

function SongDatabase() {
    
    this.database =new Array();

    this.addSong = function(interpreta, titlea, pointsa) {
	newsong=new Song(interpreta, titlea, pointsa);
        this.database.push(newsong);
	};
        
    this.getSongsByInterpret= function (interpret) {
        var result = '';
        for (var i=0; i<this.database.length; ++i){
            if (this.database[i].interpret === interpret) {
                result = result + this.database[i].toStrI() + '\n';
            }
        var res = result;
        document.getElementById("ergebnisse").value = res;
		
    }};
    
      this.getSongsBySong= function (titel) {
        var result = '';
        for (var i=0; i<this.database.length; ++i){
            if (this.database[i].titel === titel) {
                result = result + this.database[i].toStrS() + '\n';
            }
        }
        var res = result;
        document.getElementById("ergebnisse").value = res;
    };
    
      this.AddVote= function (songa,vote) {
        for (var i=0; i<this.database.length; ++i){
            if (this.database[i].titel === songa) {
                this.database[i].points= (this.database[i].points)+vote;
            }
		
    }};
    
 
}
