# 첫 번째 React Native with Expo 프로젝트

Docker + Dev Container + 호스트 머신(AVD) 을 조합한 Expo 기반 React Native 프로젝트

# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

    ```bash
    npm install
    ```

2. Start the app

    ```bash
    npx expo start
    ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# 호스트 PC - 컨테이너 간 가상 디바이스 연결

## HOST_IP 환경변수 설정.

```bash
# 호스트 IP 환경 변수 설정
apt update
apt install iproute2 -y
HOST_IP=$(ip route show default | awk '/default/ {print $3}')
echo $HOST_IP
export REACT_NATIVE_PACKAGER_HOSTNAME=$HOST_IP
```

## 앱 디버깅

1. AVD 실행.
2. 호스트 PC 터미널에서 아래 명령어 입력
    ```
    adb tcpip 5555
    adb reverse tcp:8081 tcp:8081
    ```
3. 컨테이너 터미널에서 아래 명령어 입력

    ```
    adb connect host.docker.internal:5555

    # 디바이스 연동 확인
    adb devices

    # 앱 디버깅 실행
    npm run android -c
    ```
