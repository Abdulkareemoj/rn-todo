import React, { useCallback, useRef } from "react";
import { AnimatePresence, View } from "moti";
import {
  type PanGestureHandlerProps,
  ScrollView,
} from "react-native-gesture-handler";
import TaskItem from "./task-item";
import { makeStyledComponent } from "../utils/styled";

const StyledView = makeStyledComponent(View);
const StyledScrollView = makeStyledComponent(ScrollView);

interface TaskItemData {
  id: string;
  subject: string;
  done: boolean;
}

interface TaskListProps {
  data: TaskItemData[];
  editingItemId: string | null;
  onToggleItem: (item: TaskItemData) => void;
  onChangeSubject: (item: TaskItemData) => void;
  onFinishEditing: (item: TaskItemData) => void;
  onPressLabel: (item: TaskItemData) => void;
  onRemoveItem: (item: TaskItemData) => void;
}

interface TaskItemProps
  extends Pick<PanGestureHandlerProps, "simultaneousHandlers"> {
  data: TaskItemData;
  onToggleItem: (item: TaskItemData) => void;
  isEditing: boolean;
  onChangeSubject: (item: TaskItemData) => void;
  onFinishEditing: (item: TaskItemData) => void;
    onRemove: (item: TaskItemData) => void;
}

export const AnimatedTaskItem = (props: TaskItemProps) => {
const { simultaneousHandlers, data, onToggleItem, isEditing, onChangeSubject, onFinishEditing, onPressLabel, onRemove};
}=props

const handleToggleCheckbox= useCallback(() => {
  onToggleItem(data)
}, [data, onToggleItem])

const handleChangeSubject= useCallback(() => {
  subject => {
    onChangeSubject(data, subject	)
  }
  onToggleItem(data, subject)
}, [data, onChangeSubject])

  const handleFinishEditing= useCallback(() => {
      onfinishEditing(data)
  }, [data, onFinishEEditing])

  const handlePressLabel= useCallback(()=>{
    onPressLabel(data)
  }, [data, onPressLabel])

  const handleRemove= useCallback(()=>{
onRemove(data)
  }[data, onRemove])

  return(
    <StyledView w="full" from={{
      opacity:0,
      scale:0.5,
      marginBottom:-46
    }}
    animate={{
        opacity:1,
      scale:1,
      marginBottom:0
    }}
    exit={{
        opacity:0,
      scale:0.5,
      marginBottom:-46    
    }}
    >
<TaskItem 
simultaneousHandlers={simultaneousHandlers}
subject={data.subject}
isDone={data.done}
isEditing={isEditing}
onToggleCheckbox={handleToggleCheckbox}
onChangeSubject={handleChangeSubject}
onFinishEditing={handleFinishEditing}
onPressLabel={handlePressLabel}
onRemove={handleRemove}
/>
    </StyledView>
  )

export default function TaskList(props: TaskListProps){
const{
  data, editingItemId, onToggleItem, onChangeSubject, onFinishEditing, onPressLabel, onRemoveItem
} = props
const refScrollView = useRef(null)   
return(
  <StyledScrollView ref={refScrollView} w="full">
<AnimatePresence>
  {data.map(item=>(
   <TaskItem key={item.id} data={item} simultaneousHandlers={refScrollView} isEditing={item.id === editingItemId} onToggleItem={onToggleItem} onChangeSubject={onChangeSubject} onPressLabel={onPressLabel} onRemove={onRemoveItem}/>
  ))}
</AnimatePresence>
  </StyledScrollView>
)
}

  