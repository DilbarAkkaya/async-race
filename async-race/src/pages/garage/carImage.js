export function renderCarImage(color, id) {
  const div = document.createElement('div');
  div.className = 'car-image-container';
  div.setAttribute('id', `image-${id}`);
  div.innerHTML = `
<svg fill-rule="nonzero" fill=${color} height="70px" stroke="black" stroke-width="10" width="70px" transform="translate(0 0)"
version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
viewBox="0 0 460.384 266.384" xml:space="preserve">
<g>
<path d="M 409.227 196.421 l -66.917 -7.645 l -35.714 -58.056
c -10.905 -17.728 -30.61 -28.741 -51.424 -28.741 H 133
c -34 0 -65 23.5 -75.063 57.193 l -0.948 3.5
c -4.6 16.733 -5 20 -34.549 34
C 9.506 201.217 0 213.773 0 227.914 v 83.012
c 0 4.142 3.358 7.5 7.5 7.5 h 38.557
c 4.757 22.798 25.006 39.978 49.195 39.978
s 44.438 -17.18 49.195 -39.978 h 163.37
c 4.757 22.798 25.006 39.978 49 39.978
s 44.438 -17.18 49.195 -39.978 h 40.477
c 3.813 0 7.02 -2.861 7.452 -6.65 l 5.874 -51.483
C 463.614 228.69 440.834 200.037 409.227 196.421 z z
M 95.252 343.404 c -19.44 0 -35.255 -15.815 -35.255 -35.255
s 15.815 -35.256 35.255 -35.256 s 35.255 15.816 35.255 35.256
S 114.692 343.404 95 343.404 z M 357.012 343.404
c -19.44 0 -35.255 -15.815 -35.255 -35.255
s 15.815 -35.256 35.255 -35.256
s 35.255 15.816 35.5 35.256
S 376.452 343.404 357.012 343"/>
</g>
</svg>
 `;
  return div;
}
