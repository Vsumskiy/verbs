import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

interface SpeechRecognitionInterface extends EventTarget {
    continuous: boolean;
    lang: 'en-us' | string;
    maxAlternatives: number;
    start: () => void;
    stop: () => void;
    onresult: (speech) => void;
    onerror: (error) => void;
    onend: () => void;
}

@Injectable()
export class SpeechRecognitionService {
    private speechRecognition: SpeechRecognitionInterface;

    public record(): Observable<string> {

        const speechRecognition = window['webkitSpeechRecognition'];

        if (!speechRecognition) {
            return of();
        }

        return new Observable<string>(observer => {

            this.speechRecognition = new speechRecognition();
            this.speechRecognition.continuous = true;
            this.speechRecognition.lang = 'en-us';
            this.speechRecognition.maxAlternatives = 1;

            this.speechRecognition.onresult = speech => {
                const text = this.getResultAsText(speech);
                observer.next(text);
            };

            this.speechRecognition.onerror = error => observer.error(error);

            this.speechRecognition.onend = () => observer.complete();

            this.speechRecognition.start();
        });
    }

    public stopRecording() {
        if (this.speechRecognition) {
            this.speechRecognition.stop();
        }
    }

    private getResultAsText(speech): string {
        if (speech.results) {
            const result = speech.results[speech.resultIndex];
            return result[0].transcript;
        }

        return '';
    }
}
