function regJs(navn) {
  const para = document.createElement('p');
  para.innerText = navn;

  return para;
}

regJs('Mogens');

function ReactJs({ navn = 'mogens' }) {
  return <p>{navn}</p>;
}
