import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { Chip } from '../chip';

interface BlogCardProps {
    bloggerlink: string;
    bloggername: string;
    description: string;
    link: string;
    postdate: string;
    title: string;
}

export default function BlogCard(props: BlogCardProps) {
    return (
        <>
            <Pressable className="w-full p-4 bg-white rounded-lg border border-neutral-200">
                <View className="w-full gap-2">
                    <View className="w-full flex-row gap-2">
                        {/* <Image source={require('google-logo')} /> */}
                        <Text className="text-xl font-semibold">
                            {props.title.replace(/<[^>]+>/g, '')}
                        </Text>
                    </View>
                    <Text className="text-neutral-500 text-justify line-clamp-4">
                        {props.description.replace(/<[^>]+>/g, '')}
                    </Text>
                    <View className="h-[1px] bg-neutral-200 my-3" />
                    <View className="gap-2">
                        <View className="flex-row items-center gap-2">
                            <Chip label="닉네임" />
                            <Text>{props.bloggername}</Text>
                        </View>
                        <View className="flex-row items-center gap-2">
                            <Chip label="작성일" />
                            <Text>{props.postdate}</Text>
                        </View>
                    </View>
                </View>
            </Pressable>
        </>
    );
}
