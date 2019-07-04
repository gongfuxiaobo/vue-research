class Event {
    constructor() {
        this.handlers = {}
    }

    on(type, handler, once = false) {
        if (!this.handlers[type]) {
            this.handlers[type] = []
        }

        if (!this.handlers[type].includes(handler)) {
            this.handlers[type].push(handler)
            handler.once = once
        }
    }

    off(type, handler) {
        if (this.handlers[type]) {
            if (handler === undefined) {
                this.handlers[type] = []
            } else {
                this.handlers[type] = this.handlers[type].filters(
                    f => f != handler
                )
            }
        }
    }

    tigger(type, eventData = {}, point = this) {
        if (this.handlers[type]) {
            this.handlers[type].forEach(f => {
                f.call(point, eventData)

                if (f.once) {
                    this.off(type, f)
                }
            })
        }
    }

    once(type, handler) {
        this.on(type, handler, true)
    }
}
