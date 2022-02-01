import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class speechService {

    public play(src: string): void {
        const msg = new SpeechSynthesisUtterance(src);
        window.speechSynthesis.speak(msg);
    }

}
