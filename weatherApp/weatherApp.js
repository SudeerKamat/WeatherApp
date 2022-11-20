import { LightningElement,api } from 'lwc';

export default class WeatherApp extends LightningElement {
    @api height = '620px';
    @api referrerPolicy = 'no-referrer';
    @api sandbox = 'allow-same-origin allow-scripts allow-popups allow-popups-to-escape-sandbox';
    @api url = 'https://www.meteoblue.com/en/weather/widget/three/bengaluru_india_1277333?geoloc=fixed&nocurrent=0&noforecast=0&days=7&tempunit=CELSIUS&windunit=KILOMETER_PER_HOUR&layout=monochrome';
    @api width = '100%';
}