export default {
  name: 'catalog',
  title: 'Каталог',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок (наимонование услуги)',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('Пожалуйста, введите заголовок раздела каталога.'),
    },
    {
      name: 'slug',
      title: 'Ссылка (будет показываться в адресной строке)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 90,
      },
      validation: (Rule) =>
        Rule.required().error(
          'Пожалуйста, заполните заголовок раздела каталога и нажмите Generate.'
        ),
    },
    {
      name: 'price',
      title: 'Цена',
      type: 'string',
      validation: (Rule) => Rule.required().error('Пожалуйста, введите цену для раздела каталога.'),
    },
    {
      name: 'image',
      title: 'Картинка услуги',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required().error('Пожалуйста, загрузите картинку раздела каталога.'),
    },
  ],
}
