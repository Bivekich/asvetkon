export default {
  name: 'banner',
  title: 'Главный баннер',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('Пожалуйста, введите заголовок главного баннера.'),
    },
    {
      name: 'buttonText',
      title: 'Текст кнопки',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('Пожалуйста, введите текст кнопки для главного баннера.'),
    },
  ],
}
