import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

export default function SearchScreen() {
    const HTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          /* HTML, body 및 iframe이 전체 공간을 차지하도록 설정 */
          html, body, iframe {
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
            border: none;
          }
        </style>
      </head>
      <body>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.333161833076!2d126.9779691153099!3d37.56653597979693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2e34237f39b%3A0xed0206c602b9777d!2sSeoul%20City%20Hall!5e0!3m2!1sen!2skr!4v1660000000000"
          allowfullscreen=""
          loading="lazy">
        </iframe>
      </body>
      </html>
    `;

    return (
        <View className="w-full h-full">
            {/* <WebView
                source={{ html: HTML, baseUrl: 'http://localhost:8081' }}
                originWhitelist={['*']}
                style={styles.webview}
            /> */}
            <View style={mapStyles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE} // Google 지도를 사용하도록 명시
                    style={mapStyles.map}
                    initialRegion={{
                        latitude: 37.5665, // 초기 위도 (서울)
                        longitude: 126.978, // 초기 경도 (서울)
                        latitudeDelta: 0.0922, // 확대/축소 수준
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Marker
                        coordinate={{ latitude: 37.5665, longitude: 126.978 }}
                        title="서울"
                        description="대한민국의 수도"
                    />
                </MapView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    webview: {
        flex: 1,
    },
});

const mapStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});
