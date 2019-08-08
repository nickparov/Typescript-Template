// Structure
/*
  - InputController
  - UIController
*/
//
// import { InputController, InputControllerType } from '../../export';
// import { UIController, UIControllerType } from '../../export';


interface MediatorInterface {
    notify(sender: object, event: string): void;
}

export class Mediator implements MediatorInterface {
    // private Input: InputControllerType;
    // private UI: UIControllerType;

    //  constructor(Input: InputControllerType, UI: UIControllerType) {
    //     this.Input = Input;
    //     this.Input.setMediator(this);
    //     this.UI = UI;
    //     this.UI.setMediator(this);
    // }

    public notify(sender: object, event: string): void {
        if (event === 'A') {
            console.log('Mediator reacts on A and triggers following operations:');
            // this.component2.doC();
        }

        if (event === 'D') {
            console.log('Mediator reacts on D and triggers following operations:');
            // this.component1.doB();
            // this.component2.doC();
        }
    }
}
