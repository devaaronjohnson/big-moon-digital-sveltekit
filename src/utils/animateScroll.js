export const animateScroll = {
    getAbsoluteTop: function (element) {
        let top = 0;
        while (element) {
            top += element.offsetTop || 0;
            element = element.offsetParent;
        }
        return top;
    },
    scrollTo: function ({ element, duration = 1000, offset = 0, container = 'body' }) {
        const containerElement =
            container === 'body' ? document.documentElement : document.querySelector(container);
        const containerTop = this.getAbsoluteTop(containerElement);
        const start = containerElement.scrollTop;
        const target = this.getAbsoluteTop(element) - containerTop + offset;
        const distance = target - start;
        const startTime = performance.now();
        let nextStep;

        const easeInOutQuad = function (time) {
            time /= duration / 2;
            if (time < 1) return (distance / 2) * time * time + start;
            time--;
            return (-distance / 2) * (time * (time - 2) - 1) + start;
        };

        let scroll = (currentTime) => {
            const timeElapsed = currentTime - startTime;
            nextStep = easeInOutQuad(timeElapsed);

            containerElement.scrollTop = nextStep;

            if (timeElapsed < duration) {
                requestAnimationFrame(scroll);
            }
        };

        requestAnimationFrame(scroll);
    }
};