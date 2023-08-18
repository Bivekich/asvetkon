export default {
  name: 'about',
  title: 'О нас',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Картинка',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Пожалуйста, загрузите картинку блока о нас.'),
    },
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required().error('Пожалуйста, введите заголовок о нас.'),
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required().error('Пожалуйста, введите описание о нас.'),
    },
    {
      name: 'buttonText',
      title: 'Текст кнопки',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('Пожалуйста, введите текст кнопки раздела о нас.'),
    },
  ],
}
