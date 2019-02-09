import {animate, animateChild, group, query, style, transition, trigger} from '@angular/animations';

export const routeAnimations = trigger('routeAnimations', [
  transition('* <=> *', [

    query(':enter, :leave',
      style({ position: 'fixed', width: '100%' })
      , { optional: true }),

    group([
      query(':enter', [
        style({ transform: 'translateX(100%)' }),
        animate('0.4s ease-in-out',
          style({ transform: 'translateX(0%)' })),

        query('@dashboardItemsAnim', [animateChild()], {optional: true}),
        query('@datatableRowsAnim', [animateChild()], {optional: true})
        // query('@*', [animateChild()], {optional: true}) --> visual bugs with material components
      ], { optional: true }),

      query(':leave', [
        style({ transform: 'translateX(0%)' }),
        animate('0.4s ease-in-out',
          style({ transform: 'translateX(-100%)' }))
      ], { optional: true }),
    ])
  ])
]);
