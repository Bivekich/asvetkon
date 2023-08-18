export default {
  name: 'aboutShop',
  title: 'О магазине',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Картинка',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Пожалуйста, загрузите картинку блока о магазине.'),
    },
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required().error('Пожалуйста, введите заголовок о магазине.'),
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required().error('Пожалуйста, введите описание о магазине.'),
    },
  ],
}
