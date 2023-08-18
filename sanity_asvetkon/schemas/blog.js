export default {
  name: 'blog',
  title: 'Блог',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Заголовок',
      type: 'string',
      validation: (Rule) => Rule.required().error('Пожалуйста, введите заголовок блога.'),
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
        Rule.required().error('Пожалуйста, заполните заголовок блога и нажмите Generate.'),
    },
    {
      name: 'cover',
      title: 'Картинка поста',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Пожалуйста, загрузите картинку.'),
    },
    {
      name: 'shortDescription',
      title: 'Короткое описание',
      type: 'string',
      validation: (Rule) => Rule.required().error('Пожалуйста, введите короткое описание.'),
    },
    {
      name: 'description',
      title: 'Описание',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required().error('Пожалуйста, введите описание.'),
    },
    {
      name: 'category',
      title: 'Категория',
      type: 'string',
      validation: (Rule) => Rule.required().error('Пожалуйста, введите категорию.'),
    },
    {
      name: 'authorName',
      title: 'Имя автора',
      type: 'string',
      validation: (Rule) => Rule.required().error('Пожалуйста, введите имя автора.'),
    },
    {
      name: 'authorImage',
      title: 'Аватарка автора',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required().error('Пожалуйста, загрузите аватар автора.'),
    },
  ],
}
