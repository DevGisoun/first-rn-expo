import { SearchCard } from '@/src/components/card';
import { useLocation } from '@/src/hooks';
import { SearchIcon } from 'lucide-react-native';
import React, { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native';

export default function HomeScreen() {
    const { data, loading, fetchData } = useLocation();
    const [keyword, setKeyword] = useState<string>('');

    const handleSearch = () => fetchData(keyword);

    useEffect(() => {
        handleSearch();
    }, []);

    return (
        <View className="relative w-full h-full p-4 gap-4">
            {/* 검색창 UI */}
            <View className="flex-row items-center gap-2">
                <View className="h-12 flex-1 flex-row items-center gap-2 px-2 py-[10px] bg-white border border-neutral-200 rounded-lg shadow-xs">
                    <SearchIcon size={20} color={'#d4d4d4'} />
                    <TextInput
                        placeholder="검색어 입력"
                        value={keyword}
                        onChangeText={setKeyword}
                        onSubmitEditing={handleSearch}
                        className="w-full"
                    />
                </View>
                <Pressable
                    className="w-16 h-12 flex-row items-center justify-center bg-white rounded-lg border border-neutral-200"
                    onPress={handleSearch}
                >
                    <Text>검색</Text>
                </Pressable>
            </View>
            {loading ? (
                <ActivityIndicator size={'large'} color="#4B5563" />
            ) : !data || data.length === 0 ? (
                <>
                    <View className="w-full h-full items-center justify-center">
                        <Text className="text-neutral-400 text-lg">
                            검색할 지역을 입력하세요.
                        </Text>
                    </View>
                </>
            ) : (
                <>
                    <FlatList
                        data={data}
                        ItemSeparatorComponent={() => (
                            <>
                                <View className="h-3" />
                            </>
                        )}
                        renderItem={({ item }) => <SearchCard props={item} />}
                    />
                </>
            )}
        </View>
    );
}
