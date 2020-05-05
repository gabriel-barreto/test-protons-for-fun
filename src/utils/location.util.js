/**
 * Returns the actual active page
 * @returns {string} [targetPage='fotos'] subpath to actual page
 */
function getTargetPage() {
  const { pathname } = window.location;
  const [targetPage = 'fotos'] = pathname.split('/').slice(-1);

  return targetPage;
}

export default { getTargetPage };
