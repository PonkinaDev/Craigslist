import { sortOptions } from '../../data/favorites'
import PillSelect from '../PillSelect'

export default function SortSelect() {
  return <PillSelect label="Ordenar por" options={sortOptions} />
}
