import { useState } from 'react';
import {
    Image,
    Modal,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import './global.css';

export default function Index() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View className="flex-1 items-center">
            <Text className="text-xl">하이헬로</Text>

            <Image
                source={{ uri: 'https://github.com/DevGisoun.png' }}
                style={{ width: 100, height: 100 }}
            />

            <Image
                source={{ uri: 'https://github.com/DevGisoun.png' }}
                style={{ width: 100, height: 100 }}
            />

            <TextInput placeholder="검색어를 입력하세요" />

            <Pressable onPress={() => alert('버튼이 눌렸습니다!')}>
                <Text>검색</Text>
            </Pressable>
            <Pressable>
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    presentationStyle="fullScreen"
                >
                    <SafeAreaView
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Pressable onPress={() => setModalVisible(false)}>
                            <Text>닫기</Text>
                        </Pressable>
                        <Text>모달 내용</Text>
                    </SafeAreaView>
                </Modal>
            </Pressable>
            <ScrollView></ScrollView>
        </View>
    );
}
