import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import Item from './Item';
const SortableItem = ({ id, children, laptop }) => {
  const {
    isDragging,
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
  } = useSortable({ id: id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || undefined,
    touchAction: 'none',
  };
  return (
    <Item
      ref={setNodeRef}
      style={style}
      withOpacity={isDragging}
      attributes={attributes}
      listeners={listeners}
      id={id}
      laptop={laptop}
    >
      {children}
    </Item>
  );
};

export default SortableItem;
