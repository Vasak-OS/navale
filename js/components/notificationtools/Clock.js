export default {
    data() {
        return {
            day: 0,
            month: 0,
            year: 0,
            min: 0,
            hour: 0,
        }
    },
    mounted() {
        setInterval(() => this.setTime(), 5000);
    },
    methods: {
        setTime() {
            let date = new Date();
            this.hour = date.getHours(); // 0 - 23
            this.min = date.getMinutes(); // 0 - 59
            this.day = date.getDate();
            this.month = date.getMonth() + 1;
            this.year = date.getFullYear();

            this.hour = (this.hour < 10) ? `0${this.hour}` : this.hour;
            this.min = (this.min < 10) ? `0${this.min}` : this.min;
        }
    },
    template: `
        <div id="clock">
            <span
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                :title="this.day.toString().padStart(2, '0')+ '/' + this.month.toString().padStart(2, '0') + '/' + this.year">
                {{this.hour}}:{{this.min}}
            </span>
        </div>
    `
}