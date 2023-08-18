export default {
  name: 'advantages',
  title: 'Преимущества',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required().error('Пожалуйста, введите заголовок преимущества.'),
    },
    {
      name: 'text',
      title: 'Текст блока',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required().error('Пожалуйста, введите описание преимущества.'),
    },
    {
      name: 'icon',
      title:
        'Иконка (Взять с сайта boxicons.com. Выбираете нужную, нажимаете на нее, выбираете раздел "Font" и копируете строчку кода, вставляем в наш раздел, оставляем только содержимое поле class. (Пример: bx bx-shield))',
      type: 'string',
      validation: (Rule) => Rule.required().error('Пожалуйста, вставьте код иконки.'),
    },
  ],
}
