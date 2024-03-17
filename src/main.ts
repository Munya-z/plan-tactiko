import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ThemeService } from './app/services/theme.service';

export function provideThemesService() {
  return new ThemeService();
}

// const themes = provideThemesService();

// bootstrapApplication(AppComponent, {
//   providers: [
//     {
//       provide: ThemeService,
//       useClass: ThemeService,
//     },
//   ],
// });

bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
