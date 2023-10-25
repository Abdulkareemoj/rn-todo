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

const handleSubject= useCallback(() => {
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
    <StyledView>
      
    </StyledView>
  )

export default function TaskList(props: TaskListProps){
    }

  