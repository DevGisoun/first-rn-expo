import React from 'react';
import { Text, View } from 'react-native';

interface BadgeProps {
    label: string;
}

export default function Badge({ label }: BadgeProps) {
    return (
        <View className="w-fit h-fit bg-neutral-50 border border-neutral-100 px-2 py-1 rounded-md">
            <Text className="text-xs text-neutral-500">{label}</Text>
        </View>
    );
}
