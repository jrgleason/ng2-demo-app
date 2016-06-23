import {bootstrap}     from '@angular/platform-browser-dynamic';
import {HeroComponent} from './components/hero/hero.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import { HTTP_PROVIDERS } from '@angular/http';
bootstrap(HeroComponent, [ HTTP_PROVIDERS ]);
bootstrap(NavbarComponent, [ HTTP_PROVIDERS ]);