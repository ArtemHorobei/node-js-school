import { IObserver } from './interfaces';
import { TEvent } from './interfaces';

export class ConcreteObserver implements IObserver {
    protected _type: string = '';
    protected _value: number = 0;
    constructor(name: string) {
        this._type = name;
        this._value = 0;
    }
    get name(): string {
        return this._type;
    }
    get value(): number {
        return this._value;
    }
    set name(type: string) {
        this._type = type;
    }
    set value(value: number) {
        this._value = value;
    }
    public update({ type, payload }: TEvent): void {
        if (type === this._type) {
            this._value = payload;
        }
    }
}

export class Temperature extends ConcreteObserver {
    protected _measure: string = 'K';
    constructor(measure: string) {
        super('Temperature');
        if (measure.length) {
            this._measure = measure;
        }
    }

    public update({ type, payload }: TEvent): void {
        if (type === this._type) {
            console.log(this._type, this._value, this._measure);
            this._value = payload;
            console.log(this._type, this._value, this._measure);
        }
    }
}

export class Humidity extends ConcreteObserver {
    constructor() {
        super('Humidity');
    }
}

export class Pressure extends ConcreteObserver {
    constructor() {
        super('Pressure');
    }
}
