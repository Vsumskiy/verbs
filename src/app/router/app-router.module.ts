import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ExtraOptions, PreloadAllModules, Route, RouterModule } from '@angular/router';
import { routerPathsConstant } from '@app/router/router-paths.constant';

const routerConfig: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy: PreloadAllModules
};

export const appRoutes: Route[] = [
    {
        path: routerPathsConstant.home,
        loadChildren: () => import('@pages/home/home.module').then((m) => m.HomeModule)
    },
    {
        path: routerPathsConstant.verbs,
        loadChildren: () => import('@pages/verbs/verbs.module').then(m => m.VerbsModule)
    },
    {
        path: routerPathsConstant.favorites,
        loadChildren: () => import('@pages/favorites/favorites.module').then(m => m.FavoritesModule)
    },
    {
        path: routerPathsConstant.dictionary,
        loadChildren: () => import('@pages/dictionary/dictionary.module').then(m => m.DictionaryModule)
    },
    {
        path: '**',
        redirectTo: routerPathsConstant.home
    }
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forRoot(
            appRoutes,
            routerConfig
        )
    ]
})
export class AppRouterModule {}
