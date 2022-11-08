const http = require('http');
const fs = require('fs');
const axios  = require('axios');

// Creando servidor con módulo http
http
    .createServer((req,res) => {
        
        // Ruta raíz para disponibilizar el archivo index.html
        if(req.url == '/'){
            res.writeHead(200,{'Content-Type':'text:html'});
            fs.readFile('index.html','utf8',(err,html) => {
                res.end(html);
            })
        }
        
        // Ruta para disponibilizar el JSON con el arreglo de pokemmones producido por Promise.all y formateado para mejor lectura
        if(req.url == '/pokemones') {
                      
            Promise.all([getPokemon1(),getPokemon2(),getPokemon3(),getPokemon4(),getPokemon5(),getPokemon6(),getPokemon7(),getPokemon8(),getPokemon9(),getPokemon10(),
                        getPokemon11(),getPokemon12(),getPokemon13(),getPokemon14(),getPokemon15(),getPokemon16(),getPokemon17(),getPokemon18(),getPokemon19(),getPokemon20(),
                        getPokemon21(),getPokemon22(),getPokemon23(),getPokemon24(),getPokemon25(),getPokemon26(),getPokemon27(),getPokemon28(),getPokemon29(),getPokemon30(),
                        getPokemon31(),getPokemon32(),getPokemon33(),getPokemon34(),getPokemon35(),getPokemon36(),getPokemon37(),getPokemon38(),getPokemon39(),getPokemon40(),
                        getPokemon41(),getPokemon42(),getPokemon43(),getPokemon44(),getPokemon45(),getPokemon46(),getPokemon47(),getPokemon48(),getPokemon49(),getPokemon50(),
                        getPokemon51(),getPokemon52(),getPokemon53(),getPokemon54(),getPokemon55(),getPokemon56(),getPokemon57(),getPokemon58(),getPokemon59(),getPokemon60(),
                        getPokemon61(),getPokemon62(),getPokemon63(),getPokemon64(),getPokemon65(),getPokemon66(),getPokemon67(),getPokemon68(),getPokemon69(),getPokemon70(),
                        getPokemon71(),getPokemon72(),getPokemon73(),getPokemon74(),getPokemon75(),getPokemon76(),getPokemon77(),getPokemon78(),getPokemon79(),getPokemon80(),
                        getPokemon81(),getPokemon82(),getPokemon83(),getPokemon84(),getPokemon85(),getPokemon86(),getPokemon87(),getPokemon88(),getPokemon89(),getPokemon90(),
                        getPokemon91(),getPokemon92(),getPokemon93(),getPokemon94(),getPokemon95(),getPokemon96(),getPokemon97(),getPokemon98(),getPokemon99(),getPokemon100(),
                        getPokemon101(),getPokemon102(),getPokemon103(),getPokemon104(),getPokemon105(),getPokemon106(),getPokemon107(),getPokemon108(),getPokemon109(),getPokemon110(),
                        getPokemon111(),getPokemon112(),getPokemon113(),getPokemon114(),getPokemon115(),getPokemon116(),getPokemon117(),getPokemon118(),getPokemon119(),getPokemon120(),
                        getPokemon121(),getPokemon122(),getPokemon123(),getPokemon124(),getPokemon125(),getPokemon126(),getPokemon127(),getPokemon128(),getPokemon129(),getPokemon130(),
                        getPokemon131(),getPokemon132(),getPokemon133(),getPokemon134(),getPokemon135(),getPokemon136(),getPokemon137(),getPokemon138(),getPokemon139(),getPokemon140(),
                        getPokemon141(),getPokemon142(),getPokemon143(),getPokemon144(),getPokemon145(),getPokemon146(),getPokemon147(),getPokemon148(),getPokemon149(),getPokemon150()
            ]).then((resultado) => {

                res.write(JSON.stringify(resultado,null,1));
                res.end();
            })
        }
    })
    .listen(3000, () => console.log('Escuchando el puerto 3000'));


// 150 funciones asincrónicas para conseguir los datos de cada uno de los pokemones de la lista de los 150 primeros
//
// Se usa Axios para conseguir los datos de cada url, y se construye un objeto con la url de la imagen y el nombre de cada pokemon
//-----------------------------------------------------------------------------
async function getPokemon1() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/1/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon2() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/2/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon3() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/3/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon4() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/4/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon5() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/5/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon6() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/6/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon7() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/7/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon8() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/8/');

    let pokemon = {
        img : data.sprites.front_default,
        nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon9() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/9/');

    let pokemon = {
     img : data.sprites.front_default,     
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon10() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/10/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}
//-----------------------------------------------------------------------------
//----------------------------------------------------------------------------- 
async function getPokemon11() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/11/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon12() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/12/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon13() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/13/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon14() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/14/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon15() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/15/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon16() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/16/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon17() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/17/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon18() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/18/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon19() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/19/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon20() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/20/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
async function getPokemon21() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/21/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon22() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/22/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon23() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/23/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon24() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/24/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon25() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/25/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon26() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/26/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon27() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/27/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon28() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/28/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon29() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/29/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon30() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/30/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
async function getPokemon31() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/31/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon32() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/32/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon33() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/33/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon34() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/34/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon35() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/35/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon36() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/36/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon37() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/37/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon38() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/38/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon39() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/39/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon40() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/40/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
async function getPokemon41() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/41/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon42() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/42/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon43() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/43/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon44() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/44/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon45() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/45/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon46() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/46/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon47() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/47/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon48() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/48/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon49() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/49/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon50() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/50/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
async function getPokemon51() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/51/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon52() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/52/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon53() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/53/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon54() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/54/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon55() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/55/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon56() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/56/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon57() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/57/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon58() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/58/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon59() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/59/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon60() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/60/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
async function getPokemon61() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/61/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon62() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/62/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon63() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/63/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon64() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/64/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon65() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/65/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon66() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/66/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon67() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/67/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon68() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/68/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon69() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/69/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon70() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/70/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
async function getPokemon71() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/71/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon72() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/72/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon73() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/73/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon74() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/74/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon75() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/75/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon76() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/76/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon77() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/77/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon78() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/78/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon79() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/79/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon80() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/80/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
async function getPokemon81() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/81/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon82() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/82/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon83() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/83/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon84() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/84/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon85() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/85/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon86() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/86/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon87() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/87/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon88() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/88/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon89() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/89/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon90() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/90/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
async function getPokemon91() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/91/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon92() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/92/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon93() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/93/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon94() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/94/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon95() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/95/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon96() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/96/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon97() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/97/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon98() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/98/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon99() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/99/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon100() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/100/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
async function getPokemon101() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/101/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon102() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/102/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon103() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/103/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon104() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/104/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon105() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/105/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon106() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/106/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon107() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/107/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon108() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/108/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon109() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/109/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon110() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/110/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
async function getPokemon111() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/111/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon112() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/112/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon113() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/113/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon114() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/114/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon115() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/115/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon116() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/116/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon117() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/117/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon118() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/118/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon119() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/119/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon120() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/120/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
async function getPokemon121() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/121/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon122() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/122/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon123() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/123/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon124() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/124/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon125() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/125/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon126() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/126/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon127() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/127/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon128() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/128/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon129() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/129/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon130() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/130/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
async function getPokemon131() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/131/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon132() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/132/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon133() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/133/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon134() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/134/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon135() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/135/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon136() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/136/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon137() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/137/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon138() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/138/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon139() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/139/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon140() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/140/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}
//-----------------------------------------------------------------------------
//-----------------------------------------------------------------------------
async function getPokemon141() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/141/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon142() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/142/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon143() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/143/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon144() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/144/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon145() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/145/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon146() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/146/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon147() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/147/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon148() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/148/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon149() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/149/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}

async function getPokemon150() {

    let { data } = await axios.get('https://pokeapi.co/api/v2/pokemon/150/');

    let pokemon = {
     img : data.sprites.front_default,
     nombre : data.forms[0].name
    }

     return pokemon;
}