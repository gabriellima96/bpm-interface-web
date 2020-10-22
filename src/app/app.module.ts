import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppInitializerService } from './core/initializer/app-initializer.service';
import { UrlInterceptor } from './core/interceptors/url.interceptor';
import { SolicitationModule } from './modules/solicitation/solicitation.module';

export function initApp(init: AppInitializerService) {
  return () => {
    return init.getCredentials();
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, SolicitationModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: UrlInterceptor, multi: true },
    {
      provide: APP_INITIALIZER,
      useFactory: initApp,
      multi: true,
      deps: [AppInitializerService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
