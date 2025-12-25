import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'tags',
  displayName: 'Tags',
  description: 'Tags for marking posts with keywords',
  icon: '🏷️',

  schema: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        title: 'Name',
        required: true,
        maxLength: 100
      },
      slug: {
        type: 'slug',
        title: 'URL Slug',
        required: true,
        maxLength: 100
      },
      description: {
        type: 'textarea',
        title: 'Description',
        maxLength: 300
      }
    },
    required: ['name', 'slug']
  },

  listFields: ['name', 'slug'],
  searchFields: ['name', 'description'],
  defaultSort: 'name',
  defaultSortOrder: 'asc'
} satisfies CollectionConfig
