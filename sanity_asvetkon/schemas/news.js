export default {
  name: 'news',
  title: 'Новости',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Картинка',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Пожалуйста, загрузите картинку новости.'),
    },
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required().error('Пожалуйста, введите заголовок новости.'),
    },
    {
      name: 'news',
      title: 'Новость',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required().error('Пожалуйста, введите новость.'),
    },
    {
      title: 'Дата новости',
      name: 'date',
      type: 'date',
      options: {
        dateFormat: 'DD.MM.YYYY',
        calendarTodayLabel: 'Today',
      },
      validation: (Rule) => Rule.required().error('Пожалуйста, укажите дату.'),
    },
  ],
}
