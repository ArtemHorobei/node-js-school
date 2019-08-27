import { Temperature, Humidity, Pressure } from './observer';
import { ConcreteObservable } from './observable';

const observerTemperature = new Temperature('');
const observerHumidity = new Humidity();
const observerPressure = new Pressure();
const observable = new ConcreteObservable();

observable.registerObserver(observerTemperature);
observable.registerObserver(observerHumidity);
observable.registerObserver(observerPressure);

observable.notifyObservers({
    type: 'Temperature',
    payload: 56,
});

observable.notifyObservers({
    type: 'Humidity',
    payload: 0.1,
});

observable.notifyObservers({
    type: 'Pressure',
    payload: 760,
});

observable.notifyObservers({
    type: 'Temperature',
    payload: 36.6,
});
