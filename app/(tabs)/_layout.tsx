import { Tabs } from 'expo-router';
import { HomeIcon, SearchIcon } from 'lucide-react-native';

export default function TabsLayout() {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarStyle: {
                        height: 60,
                        paddingTop: 4,
                        paddingBottom: 4,
                    },
                    tabBarLabelStyle: {
                        marginTop: 2,
                    },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: '홈',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <HomeIcon size={20} color={color} />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="search"
                    options={{
                        title: '검색',
                        headerShown: false,
                        tabBarIcon: ({ color }) => (
                            <SearchIcon size={20} color={color} />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
}
