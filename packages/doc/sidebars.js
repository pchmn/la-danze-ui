module.exports = {
  docs: [
    'gettingStarted',
    {
      type: 'category',
      label: 'Usage',
      items: [
        'usage/usageIntroduction',
        {
          type: 'category',
          label: 'Core',
          items: ['usage/core/theme', 'usage/core/drawer'],
        }
      ],
    },
  ]
};
