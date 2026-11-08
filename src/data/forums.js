export const forums = ['TV', 'Legal', 'Ecologia', 'Casamiento', 'Gaming', 'Religion', 'Fotografia', 'Bromas']

export const INITIAL_THREADS = 2
export const THREADS_PER_LOAD = 2

const text =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquam cursus tellus pulvinar ornare. Pellentesque et ex sem. Sed ut sodales risus, tincidunt pretium ligula. Nunc in posuere sapien, id eleifend erat. Integer sagittis elit dolor. Suspendisse blandit augue quis enim iaculis varius. Aenean eu ipsum facilisis, tempus turpis sit amet, vehicula tellus.'

const buildComment = (id, likes, replies = []) => ({
  id,
  author: 'UsuarioCualquiera',
  time: 'Hace 2 Dias',
  text,
  likes,
  replies,
})

export const threads = [
  buildComment(1, 5, [buildComment(2, 2), buildComment(3, 1), buildComment(4, 0)]),
  buildComment(5, 3, [buildComment(6, 1)]),
  buildComment(7, 8, [buildComment(8, 2), buildComment(9, 4)]),
  buildComment(10, 1),
  buildComment(11, 6, [buildComment(12, 0)]),
  buildComment(13, 2),
]
