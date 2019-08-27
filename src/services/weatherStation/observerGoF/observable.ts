import { IObservable, IObserver, TEvent } from './interfaces';

export class ConcreteObservable implements IObservable {
    private observers: Set<IObserver> = new Set();

    public notifyObservers(newEvent: TEvent): void {
        this.observers.forEach(observer => observer.update(newEvent));
    }

    public registerObserver(observer: IObserver): void {
        this.observers.add(observer);
    }

    public removeObserver(observer: IObserver): void {
        this.observers.delete(observer);
    }
}
