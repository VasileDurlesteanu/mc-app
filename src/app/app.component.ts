import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mc-app';

  menuItems = [{
    name: 'Video Players',
    items: [
        { name: 'HD Video Player', price: 220 },
        { name: 'SuperHD Video Player', price: 270 }
    ]
}, {
    name: 'Televisions',
    items: [
        { name: 'SuperLCD 42', price: 1200 },
        { name: 'SuperLED 42', price: 1450 },
        { name: 'SuperLED 50', price: 1600 }
    ]
}, {
    name: 'Monitors',
    items: [{
        name: '19"',
        items: [
            { name: 'DesktopLCD 19', price: 160 }
        ]
    }, {
        name: '21"',
        items: [
            { name: 'DesktopLCD 21', price: 170 },
            { name: 'DesktopLED 21', price: 175 }
        ]
    }]
}];

}