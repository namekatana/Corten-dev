import { useTranslation } from 'react-i18next'
import type { StackGroup } from '../../config/about'
import { AnimatedText } from '../AnimatedText/AnimatedText'
import './StackList.css'

type StackListProps = {
  groups: StackGroup[]
}

export function StackList({ groups }: StackListProps) {
  const { t } = useTranslation()

  return (
    <div className="stackList" role="list">
      {groups.map((group) => (
        <div key={group.key} className="stackGroup" role="listitem">
          <p className="stackGroupLabel">
            <AnimatedText text={t(`about.stack.${group.key}`)} />
          </p>
          <p className="stackGroupItems">{group.items.join('  ')}</p>
        </div>
      ))}
    </div>
  )
}
