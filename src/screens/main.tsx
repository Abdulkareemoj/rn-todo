import React, { useCallback, useState } from "react";
import {
  Text,
  Box,
  Center,
  VStack,
  useTheme,
  useColorMode,
  useColorModeValue,
  Fab,
  Icon
} from "native-base";
import { AntDesign } from "@expo/vector-icons";
import ThemeSwitch from "../components/theme-switch";
import TaskItem from "../components/task-item";
import { nanoid } from "nanoid";
import TaskList from "../components/task-list";
const initialData = [
  {
    id: nanoid(),
    subject: "Exist",
    done: false,
  },
  {
    id: nanoid(),
    subject: "Eat",
    done: false,
  },
  {
    id: nanoid(),
    subject: "Sleep",
    done: false,
  },
];

export default function MainScreen(): JSX.Element   {
  const [data, setData] = useState(initialData);
  const [editingItemId, setEditingItemId] = useState<string | null>(null);

  const handleToggleTaskItem = useCallback((item) => {
    setData((prevData) => {
      const newData = [...prevData];
      const index = prevData.indexOf(item);
      newData[index] = {
        ...item,
        done: !item.done
      }
      return newData
    });
  }, []);

 const handleChangeTaskItemSubject = useCallback((item, newSubject) => {
  setData(prevData) => {
const newData = [...prevData]
const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        subject: newSubject
      }
      return newData
    })
 }, [])

 const handleFinishEditingTaskItem = useCallback(_item=> {setEditingitemId(null)

}, [])

 const handlePressTaskItemLabel = useCallback(item => {
setEditingItemId(item.id)
 }, [])
 const handleRemoveItem = useCallback(_item=> {setData(prevData =>{
  const newData = prevData.filter(i=>i!==item)
  return newData
 })

}, [])


  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center" w="full">
      <TaskList 
      data={data}
      onToggleItem={handleToggleTaskItem}
      onChangeSubject={handleChangeTaskItemSubject}
      onFinishEditing={handleFinishEditingTaskItem}
      onPressLabel={handlePressTaskItemLabel}
      onRemoveItem={handleRemoveItem}
      editingItemId={editingItemId}
       
      />
        <TaskItem
          isDone={checked}
          onToggleCheckbox={handlePressCheckbox}
          subject={subject}
          onChangeSubject={setSubject}
          onPressLabel={() => {
            setEditing(true);
          }}
          isEditing={isEditing}
          onFinishEditing={() => {
            setEditing(false);
          }}
        />
        <ThemeSwitch />
      </VStack>
      <Fab position="absolute" renderInPortal={false} size="sm" icon={<Icon color="white" as={<AntDesign name="plus" size="sm" />} />} 
      colorScheme={useColorModeValue('blue', 'darkBlue' )}
bg={useColorModeValue('blue.500', 'blue.400' )}
onPress={()=>{
  const id= nanoid()
  SetData([
    {
      id,
      subject: '',
      done: false
    },
    ...data
  ])
  setEditingItemId(id)
}}
/>
    </Center>
  );
}
