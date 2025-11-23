import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Feats } from './feats/feats';
import { Transform } from './transform/transform';
import { Gallery } from './gallery/gallery';
import { About } from './about/about';
import { Terms } from './terms/terms';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'feats', component: Feats },
  { path: 'transform', component: Transform },
  { path: 'gallery', component: Gallery },
  { path: 'about', component: About },
  { path: 'regulamin', component: Terms },
  { path: 'polityka-prywatnosci', component: Terms },
];
