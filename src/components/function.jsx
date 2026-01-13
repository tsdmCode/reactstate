//ignorer den her fil det var bare mig der viste Jakob hvordan props basically er function parameters

function regJs(navn) {
  const para = document.createElement('p');
  para.innerText = navn;

  return para;
}

regJs('Mogens');

function ReactJs({ navn = 'mogens' }) {
  return <p>{navn}</p>;
}
