export const jp = {
  '/jp/guide/': [
    {
      text: '',
      collapsible: false,
      sidebarDepth: 0,
      children: [
        '/jp/guide/'
      ]
    },
    // With start character is `c`
    {
      text: 'Common',
      collapsible: false,
      sidebarDepth: 3,
      children: [
        'c-naming-conventions',
        'c-comment',
      ],
    },
    // With start character is `db`
    {
      text: 'Database',
      collapsible: false,
      sidebarDepth: 3,
      children: [
        // 'db-postgresql',
        // 'db-sql',
        // 'db-oracle-fdw',
      ],
    },
    // With start character is `be`
    {
      text: 'Backend',
      collapsible: false,
      sidebarDepth: 3,
      children: [
        'be-java',
        'be-api',
        // 'be-report',
      ],
    },
    // With start character is `fe`
    {
      text: 'FrontEnd',
      collapsible: false,
      sidebarDepth: 3,
      children: [
        // 'fe-angular',
        // 'fe-angular-tip-trick',
        // 'fe-css',
        'fe-chartjs',
      ],
    },
    // With start character is `z`
    {
      text: 'Other',
      collapsible: false,
      sidebarDepth: 3,
      children: [
        'z-how-to-write-document'
      ]
    },
  ],
};
