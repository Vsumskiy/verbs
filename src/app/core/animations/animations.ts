import {
    animate,
    animateChild,
    animation,
    query,
    stagger,
    state,
    style,
    transition,
    trigger,
    useAnimation
} from '@angular/animations';

const customAnimation = animation([
    style({
        opacity: '{{opacity}}',
        transform: 'scale({{scale}}) translate3d({{x}}, {{y}}, {{z}})'
    }),
    animate('{{duration}} {{delay}} cubic-bezier(0.0, 0.0, 0.2, 1)', style('*'))
], {
    params: {
        duration: '200ms',
        delay: '0ms',
        opacity: '0',
        scale: '1',
        x: '0',
        y: '0',
        z: '0'
    }
});

export const animations = [

    trigger('animate', [
        transition('void => *', [useAnimation(customAnimation)])
    ]),

    trigger('fadeInOut', [
        state('0, void', style({
            opacity: 0
        })),
        state('1, *', style({
            opacity: 1
        })),
        transition('1 => 0', animate('300ms ease-out')),
        transition('0 => 1', animate('300ms ease-in')),
        transition('void <=> *', animate('300ms ease-in'))
    ]),

    trigger('customFadeInOut', [
        state('0, void', style({
            opacity: 0
        })),
        state('1, *', style({
            opacity: 1
        })),
        transition('1 => 0', animate('0ms ease-out')),
        transition('0 => 1', animate('300ms ease-in')),
        transition('void => *', animate('300ms ease-in'))
    ]),

    trigger('slideInOut', [
        state('0', style({
            height: '0px'
        })),
        state('1', style({
            height: '*'
        })),
        transition('1 => 0', animate('300ms ease-out')),
        transition('0 => 1', animate('300ms ease-in'))
    ]),

    trigger('slideIn', [
        transition('void => left', [
            style({
                transform: 'translateX(100%)'
            }),
            animate('300ms ease-in',
                style({
                    transform: 'translateX(0)'
                })
            )
        ]
        ),
        transition('left => void', [
            style({
                transform: 'translateX(0)'
            }),
            animate('300ms ease-in',
                style({
                    transform: 'translateX(-100%)'
                })
            )
        ]
        ),
        transition('void => right', [
            style({
                transform: 'translateX(-100%)'
            }),
            animate('300ms ease-in',
                style({
                    transform: 'translateX(0)'
                })
            )
        ]
        ),
        transition('right => void', [
            style({
                transform: 'translateX(0)'
            }),
            animate('300ms ease-in',
                style({
                    transform: 'translateX(100%)'
                })
            )
        ]
        )
    ]),

    trigger('slideInLeft', [
        state('void', style({
            transform: 'translateX(-100%)'
        })),
        state('*', style({
            transform: 'translateX(0)'
        })),
        transition('void => *', animate('300ms')),
        transition('* => void', animate('300ms'))
    ]),

    trigger('slideInRight', [
        state('void', style({
            transform: 'translateX(100%)'
        })),
        state('*', style({
            transform: 'translateX(0)'
        })),
        transition('void => *', animate('300ms')),
        transition('* => void', animate('300ms'))
    ]),

    trigger('slideInTop', [
        state('void', style({
            transform: 'translateY(-100%)'
        })),
        state('*', style({
            transform: 'translateY(0)'
        })),
        transition('void => *', animate('300ms')),
        transition('* => void', animate('300ms'))
    ]),

    trigger('slideInBottom', [
        state('void', style({
            transform: 'translateY(100%)'
        })),
        state('*', style({
            transform: 'translateY(0)'
        })),
        transition('void => *', animate('300ms')),
        transition('* => void', animate('300ms'))
    ]),

    trigger('slideFromTop', [
        state('void', style({
            height: '0'
        })),
        state('*', style({
            height: '*'
        })),
        transition('void => *', animate('300ms ease-out')),
        transition('* => void', animate('100ms linear'))
    ]),

    trigger('expandCollapse', [
        state('void', style({
            height: '0px'
        })),
        state('*', style({
            height: '*'
        })),
        transition('void => *', animate('300ms ease-out')),
        transition('* => void', animate('300ms ease-in'))
    ]),
    // -----------------------------------------------------------------------------------------------------

];
