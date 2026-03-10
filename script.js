// selecionar todos os times
const teams = document.querySelectorAll(".team");

// mapa de progressão do torneio
const nextMatch = {
    1: 9,
    2: 9,
    3:10,
    4:10,
    5:11,
    6:11,
    7:12,
    8:12,
    9:13,
    10:13,
    11:14,
    12:14,
    13:15,
    14:15
};

// adicionar evento de clique em todos os times
teams.forEach( team => {
    team.addEventListener ("click", () => {

        const matchElement = team.closest ( ".match" );
        const matchNumber = Number(matchElement.dataset.match);

        const next = nextMatch [matchNumber];

        
        //final
        if ( matchNumber === 15) {
            
            const championlogo = document.getElementById ( "champion-logo" );
            
            const logo = team.querySelector ("img");
            if (championlogo && logo) { 
                
                championlogo.src = logo.src; }
                
                return;
                
            }    
            
            if (!next) return;
            
            const nextMatchElement = document.querySelector (`.match[data-match="${next}"]` );
            if (!nextMatchElement) return;
    
            const nextTeams = nextMatchElement.querySelectorAll ( ".team" );
    
            const position = matchNumber % 2 === 1 ? 0 : 1;
    
            //copia logo + nome
            nextTeams[position].innerHTML = team.innerHTML;
            
        });
});