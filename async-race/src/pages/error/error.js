export function createErrorMain() {
  const parent = new DocumentFragment();
  const errorWrapper = document.createElement('div');
  errorWrapper.className = 'error';
  errorWrapper.style.fontSize = '36px';
  errorWrapper.innerText = 'The page is not found';
  parent.append(errorWrapper);
  return errorWrapper;
}
