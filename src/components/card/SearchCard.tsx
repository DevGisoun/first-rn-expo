import { ChevronRight } from 'lucide-react-native';
import React from 'react';
import { FlatList, Linking, Pressable, Text, View } from 'react-native';
import { Badge } from '../badge';
import Chip from '../chip/Chip';

interface SearchCardProps {
    props: {
        address: string;
        roadAddress: string;
        category: string;
        description: string;
        link: string;
        telephone: string;
        title: string;
        mapx: string;
        mapy: string;
    };
}

export default function SearchCard({ props }: SearchCardProps) {
    return (
        <View className="w-full p-4 gap-2 border-neutral-200 rounded-lg shadow-sm bg-white">
            <View className="w-full flex-row items-center justify-between">
                <FlatList
                    data={props.category.split('>')}
                    horizontal={true}
                    ItemSeparatorComponent={() => (
                        <>
                            <View className="w-2"></View>
                        </>
                    )}
                    renderItem={({ item }) => (
                        <>
                            <Chip label={item} />
                        </>
                    )}
                />
                {props.link && (
                    <Pressable
                        onPress={() => Linking.openURL(props.link)}
                        className="flex-row items-center gap-1"
                    >
                        <Text className="text-sm">바로가기</Text>
                        <ChevronRight size={16} className="text-neutral-500" />
                    </Pressable>
                )}
            </View>
            <View className="w-full h-[1px] my-1 bg-neutral-200" />
            <View className="w-full gap-2">
                <Text className="text-xl font-semibold">
                    {props.title.replace(/<[^>]+>/g, '')}
                </Text>
                <View className="w-full gap-1">
                    <View className="w-full flex-row items-center gap-1">
                        <Badge label="지번" />
                        <Text className="text-sm text-neutral-500 line-clamp-1">
                            {props.address
                                ? props.address
                                : '등록된 지번이 없습니다.'}
                        </Text>
                    </View>
                    <View className="w-full flex-row items-center gap-1">
                        <Badge label="도로명" />
                        <Text className="text-sm text-neutral-500 line-clamp-1">
                            {props.roadAddress
                                ? props.roadAddress
                                : '등록된 도로명이 없습니다.'}
                        </Text>
                    </View>
                    <View className="w-full flex-row items-center gap-1">
                        <Badge label="전화번호" />
                        <Text className="text-sm text-neutral-500 line-clamp-1">
                            {props.telephone ? props.telephone : '-'}
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
}
