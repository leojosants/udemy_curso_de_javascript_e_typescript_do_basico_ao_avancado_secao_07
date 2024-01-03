(() => {
    /*******************************************************************************/
    class RemoteControl {
        constructor(device) {
            this.device = device;
            this.volume = 0;
        }

        increase() {
            this.volume++;
            console.log('-> aumentado volume');
        }

        decrease() {
            this.volume--;
            console.log('-> diminuido volume');
        }

        static putBattery() {
            console.log('-> inserido pilha');
        }
    }

    /*******************************************************************************/
    const instanceateRemoteControl = (device) => {
        return new RemoteControl(device);
    };

    /*******************************************************************************/
    const remote_control_tv = instanceateRemoteControl('TV');
    console.log(remote_control_tv);
    remote_control_tv.increase();
    console.log(remote_control_tv);
    RemoteControl.putBattery();
})()