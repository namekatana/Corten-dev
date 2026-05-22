import type { StackGroup } from '../../config/about'
import './StackList.css'

type StackListProps = {
  groups: StackGroup[]
}

export function StackList({ groups }: StackListProps) {
  return (
    <div className="stackList" role="list">
      {groups.map((group) => (
        <div key={group.label} className="stackGroup" role="listitem">
          <p className="stackGroupLabel">{group.label}</p>
          <p className="stackGroupItems">{group.items.join('  ')}</p>
        </div>
      ))}
    </div>
  )
}
