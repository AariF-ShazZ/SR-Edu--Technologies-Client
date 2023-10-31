import React from "react";
import {
  HStack,
  Box,
  VStack,
  Flex,
  Text,
  StackDivider,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import img from "../images/empty.svg";
import { useDispatch } from "react-redux";
import { getTasks, updateTask } from "../Redux/todosRedux/actions";

function Task({ tasks}) {
  const dispatch = useDispatch()
  const changeStatus = (id) => {
    dispatch(updateTask(id))
    .then((res) => {
      dispatch(getTasks())
    })
    .catch((err) => console.log(err))
  }
  if (!tasks.length) {
    return (
      <>
        <Box maxW='80%'>
          <Image
            mt='20px'
            w='98%'
            maxW='350'
            src={img}
            alt='Your list is empty'
          />
        </Box>
      </>
    );
  }
  return (
    <>
      <VStack
        divider={<StackDivider />}
        borderColor='gray.100'
        borderWidth='2px'
        p='5'
        borderRadius='lg'
        w='100%'
        maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "30vw" }}
        alignItems='stretch'
      >
        {tasks.map((task) => (
          <HStack key={task._id} opacity={task.completed === true ? "0.2" : "1"}>
            <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"} onClick={() => changeStatus(task._id)}>
            <Text
              w='50%'
              p='8px'
              borderRadius='lg'
              cursor='pointer'
            >
              {task.text}
            </Text>
            <Text
              w='50%'
              pl='50px'
              pt={"8px"}
              pb={"8px"}
              pr={"8px"}
              borderRadius='lg'
              cursor='pointer'
            >
              {task.completed ? "Complete": "Incomplete"}
            </Text>
            </Flex>
           
          </HStack>
        ))}
      </VStack>
    </>
  );
}

export default Task;