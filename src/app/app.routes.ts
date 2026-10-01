import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/layout/layout').then((m) => m.Layout),
        children: [
            {
                path: "",
                loadComponent: () => import("./pages/root/root").then((c) => c.Root)
            },
            {
                path: "nosotros",
                loadComponent: () => import("./pages/nosotros/nosotros").then((c) => c.Nosotros)
            }
        ]
    },
];
