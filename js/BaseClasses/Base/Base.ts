import { Mediator } from '../../export';

export class Base {
    protected mediator: Mediator;

    constructor(mediator: Mediator = null) {
        this.mediator = mediator;
    }

    public setMediator(mediator: Mediator): void {
        this.mediator = mediator;
    }
}
