window.onload = () => {
  // aquí se define el evento para que al oprimir el boton se cambie la url
  document.querySelector("#buttonURL").addEventListener("click", () => {
    // con innerHTML logro escribir sobre el HTML para colocar la nueva frase
    document.querySelector("#url").innerHTML = NewURL();
  });
};

function NewURL() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dot = [".com", ".es", ".net", ".us", ".io"];

  //   Aquí tengo los diferentes indices de donde voy a tomar mi url
  let pronounIndx = Math.floor(Math.random() * pronoun.length);
  let adjIndx = Math.floor(Math.random() * adj.length);
  let nounIndx = Math.floor(Math.random() * noun.length);
  let dotIndx = Math.floor(Math.random() * dot.length);

  //  Me retorna el nombre de cada url distinta
  return pronoun[pronounIndx] + adj[adjIndx] + noun[nounIndx] + dot[dotIndx];
}
