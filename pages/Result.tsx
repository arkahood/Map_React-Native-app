import { useEffect, useState } from "react";
import { View, Text } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { Card } from "@rneui/base";
import { CardDivider } from "@rneui/base/dist/Card/Card.Divider";


const Result = () => {

    const location = useSelector((state:any) => state.location);
    const [weatherRes , setWeatherRes] = useState<any>();

    useEffect(() => {
        console.log(location);
        resultFetch();
    }, []);
    const resultFetch = async () => {
        const respose: any = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=9ed238c68268c5ddb917815b5697786d&units=imperial`
        );
        const data: any = await respose.json();
        setWeatherRes(data);
        console.log(data);
    }

    return (
        <View>
            <Card>
            <Text>RESULT</Text>
            <CardDivider/>
            <Text>Temerature : {weatherRes?.main?.temp}C</Text>
            <Text>feels_like : {weatherRes?.main?.feels_like}C</Text>
            <Text>humidity : {weatherRes?.main?.temp}%</Text>
            <Text>TYPE : {weatherRes?.weather[0]?.main}</Text>
            </Card>
        </View>
    )
}

export default Result;