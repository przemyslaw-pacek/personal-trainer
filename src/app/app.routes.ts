import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Achievements } from './achievements/achievements';
import { Transformations } from './transformations/transformations';
import { Gallery } from './gallery/gallery';
import { About } from './about/about';
import { Training } from './training/training';
import { Terms } from './terms/terms';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'achievements', component: Achievements },
  { path: 'transformations', component: Transformations },
  { path: 'gallery', component: Gallery },
  { path: 'about', component: About },
  { path: 'training', component: Training },
  { path: 'regulamin', component: Terms },
  { path: 'polityka-prywatnosci', component: Terms },
];
