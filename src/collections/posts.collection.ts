import type { CollectionConfig } from '@sonicjs-cms/core'

export default {
  name: 'posts',
  displayName: 'Posts',
  description: 'Site posts and articles',
  icon: '📰',

  schema: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
        title: 'Title',
        required: true,
        maxLength: 200
      },
      slug: {
        type: 'slug',
        title: 'URL Slug',
        required: true,
        maxLength: 200
      },
      date: {
        type: 'date',
        title: 'Date'
      },
      description: {
        type: 'textarea',
        title: 'Description',
        maxLength: 500
      },
      content: {
        type: 'richtext',
        title: 'Content',
        required: true
      },
      tags: {
        type: 'array',
        title: 'Tags',
        items: {
          type: 'reference',
          collection: 'tags'
        }
      },
      categories: {
        type: 'array',
        title: 'Categories',
        items: {
          type: 'reference',
          collection: 'categorys'
        }
      },
      featureimage: {
        type: 'media',
        title: 'Featured Image'
      },
      status: {
        type: 'select',
        title: 'Status',
        enum: ['draft', 'published', 'archived'],
        enumLabels: ['Draft', 'Published', 'Archived'],
        default: 'draft'
      }
    },
    required: ['title', 'slug', 'content']
  },

  // Display configuration
  listFields: ['title', 'date', 'status'],
  searchFields: ['title', 'description', 'content'],
  defaultSort: 'date',
  defaultSortOrder: 'desc'
} satisfies CollectionConfig
