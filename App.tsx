import React from "react"
import { Center, NativeBaseProvider, Stack, Input, TextArea, Button, Link, Text, Box, AspectRatio, Image, Heading, HStack } from "native-base"

const Formulario = () => {
  return <Box width="100%">
    <Input variant="outline" placeholder="Digite o seu nome" />
    <TextArea h={20} placeholder="Digite a sua Mensagem" />
    <Text fontSize="xs" _light={{
            color: "muted.500"
          }} _dark={{
            color: "muted.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
           *Os campos não são obrigatórios
          </Text>
    <Button onPress={() => console.log('envou')}>Enviar</Button>
  </Box>
};


const Example = () => {
  return <Box alignItems="center" width="100%">
    <Box rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
      borderColor: "coolGray.600",
      backgroundColor: "gray.700"
    }} _web={{
      shadow: 2,
      borderWidth: 0
    }} _light={{
      backgroundColor: "gray.50"
    }}>
      <Box>
        <AspectRatio w="100%" ratio={16 / 9}>
          <Image source={{
            uri: "https://github.com/heraclitothiago/contate-oab-caxias-ma/blob/main/assets/public/imgs/demonstration.png?raw=true"
          }} alt="image" />
        </AspectRatio>
        <Center bg="violet.500" _dark={{
          bg: "violet.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
          CONTATE-NOS
        </Center>
      </Box>
      <Stack p="4" space={3}>
        <Stack space={2}>
          <Heading size="md" ml="-1">
            OAB/MA
          </Heading>
          <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
            Subseção Caxias
          </Text>
        </Stack>
        <Text fontWeight="400">
          Envie-nos uma mensagem de sugestão, reclamação ou elogios. Fique livre para expressar o que quiser
        </Text>
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
            <Formulario />
          </HStack>
        </HStack>
      </Stack>
    </Box>
  </Box>;
};

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1}>
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}

