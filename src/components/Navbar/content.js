export const links = [
  {
    label: 'Fotos',
    subpath: 'fotos',
    activeCondition: (path) => path.includes('fotos'),
  },
  {
    label: 'Posts',
    subpath: 'posts',
    activeCondition: (path) => path.includes('posts'),
  },
  { label: 'Sair', subpath: '/sair', activeCondition: () => false },
];
