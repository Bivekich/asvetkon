export default {
  name: 'services',
  title: 'Услуги',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок (наименование услуги, должно быть уникальным)',
      type: 'string',
      validation: (Rule) => Rule.required().error('Пожалуйста, введите заголовок услуги.'),
    },
    {
      name: 'description',
      title: 'Описание услуги',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required().error('Пожалуйста, введите описание услуги.'),
    },
    {
      name: 'catalog',
      title: 'Раздел каталога',
      type: 'reference',
      to: [{type: 'catalog'}],
      validation: (Rule) => Rule.required().error('Пожалуйста, выберите раздел каталога.'),
    },
    {
      name: 'image',
      title: 'Картинка услуги',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Пожалуйста, загрузите картинку услуги.'),
    },
  ],
}
