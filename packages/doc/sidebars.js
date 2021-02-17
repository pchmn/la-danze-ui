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
        },
        {
          type: 'category',
          label: 'Animation',
          items: ['usage/animation/routing', 'usage/animation/appearance'],
        },
        'usage/form/form',
      ],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        {
          type: 'category',
          label: 'Components',
          items: [
            'api/components/LaDanzeTheme',
            'api/components/DrawerTemplate',
            'api/components/LaDanzeDrawer',
            'api/components/DrawerListItem',
            'api/components/AnimateSwitch',
            'api/components/AnimateRoute',
            'api/components/AnimateLink',
            'api/components/MountTransition',
            'api/components/Form',
            'api/components/FormField',
            'api/components/NavLink',
          ]
        },
        {
          type: 'category',
          label: 'Hooks',
          items: [
            'api/hooks/useAnimationKey',
            'api/hooks/useLaDanzeDrawer',
          ]
        }
      ],
    },
  ]
};
