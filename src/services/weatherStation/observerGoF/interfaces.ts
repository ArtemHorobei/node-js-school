export type TEvent = {
    type: string;
    payload: number;
};

export interface IObserver {
    update(eventName: TEvent): void;
}

export interface IObservable {
    registerObserver(o: IObserver): void;

    removeObserver(o: IObserver): void;

    notifyObservers(newEvent: TEvent): void;
}
