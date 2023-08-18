export default {
  name: 'reviews',
  title: 'Отзывы',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Имя',
      type: 'string',
      validation: (Rule) => Rule.required().error('Пожалуйста, введите имя человека.'),
    },
    {
      name: 'review',
      title: 'Отзыв',
      type: 'string',
      validation: (Rule) => Rule.required().error('Пожалуйста, введите отзыв.'),
    },
    {
      name: 'image',
      title: 'Картинка человека',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Пожалуйста, загрузите картинку человека.'),
    },
    {
      name: 'star1',
      title: '1 звезда',
      type: 'string',
      options: {
        list: [
          {title: '⭐', value: 'bx bxs-star'},
          {title: '⚝', value: 'bx bx-star'},
        ],
      },
      validation: (Rule) => Rule.required().error('Пожалуйста, выберите звезду.'),
    },
    {
      name: 'star2',
      title: '2 звезда',
      type: 'string',
      options: {
        list: [
          {title: '⭐', value: 'bx bxs-star'},
          {title: '⚝', value: 'bx bx-star'},
        ],
      },
      validation: (Rule) => Rule.required().error('Пожалуйста, выберите звезду.'),
    },
    {
      name: 'star3',
      title: '3 звезда',
      type: 'string',
      options: {
        list: [
          {title: '⭐', value: 'bx bxs-star'},
          {title: '⚝', value: 'bx bx-star'},
        ],
      },
      validation: (Rule) => Rule.required().error('Пожалуйста, выберите звезду.'),
    },
    {
      name: 'star4',
      title: '4 звезда',
      type: 'string',
      options: {
        list: [
          {title: '⭐', value: 'bx bxs-star'},
          {title: '⚝', value: 'bx bx-star'},
        ],
      },
      validation: (Rule) => Rule.required().error('Пожалуйста, выберите звезду.'),
    },
    {
      name: 'star5',
      title: '5 звезда',
      type: 'string',
      options: {
        list: [
          {title: '⭐', value: 'bx bxs-star'},
          {title: '⚝', value: 'bx bx-star'},
        ],
      },
      validation: (Rule) => Rule.required().error('Пожалуйста, выберите звезду.'),
    },
  ],
}
