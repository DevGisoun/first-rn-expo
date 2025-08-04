import React from 'react';
import { Text, View } from 'react-native';

interface ChipProps {
    label: string;
}

export default function Chip({ label }: ChipProps) {
    return (
        <>
            <View className="w-fit h-fit bg-neutral-200 border border-neutral-200 px-2 py-2 rounded-md">
                <Text className="text-xs">{label}</Text>
            </View>
        </>
    );
}
