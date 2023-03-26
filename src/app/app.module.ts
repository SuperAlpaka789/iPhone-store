import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HomeModule } from './home/home.module';
import { DetailsModule } from './details/details.module';
import { HttpClientModule } from '@angular/common/http';
import { FooterModule } from './shared/modules/footer/footer.module';
import { MaterialModule } from './shared/modules/material/material.module';
import { SideBarModule } from './shared/modules/side-bar/side-bar.module';
import { TopBarModule } from './shared/modules/top-bar/top-bar.module';
import { StoreModule } from '@ngrx/store';
import { addToCartReducer } from './shared/store/reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CartModule } from './cart/cart.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    TopBarModule,
    SideBarModule,
    HomeModule,
    DetailsModule,
    FooterModule,
    HttpClientModule,
    StoreModule.forRoot({ appState: addToCartReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    CartModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
